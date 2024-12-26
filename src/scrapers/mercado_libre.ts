import path from 'path';
import { BrowserContext } from 'playwright';
import fs from 'fs';
import { twilo_client } from '../config/twilo';

const mercado_libre = async (
    contexto: BrowserContext,
    url: string,
    precio_umbral: number,
    csv_name: string
) => {
    const csvFilePath = path.resolve(`src/csv/${csv_name}.csv`);

    // Verifica si el archivo CSV ya existe; si no, crea el encabezado
    if (!fs.existsSync(csvFilePath)) {
        fs.writeFileSync(csvFilePath, 'Plataforma,Fecha,Hora,Nombre,Precio\n');
    }

    const pagina = await contexto.newPage();

    await pagina.goto(url, {
        waitUntil: 'domcontentloaded',
    });

    // Espera un tiempo aleatorio entre 5 y 20 segundos
    const randomWaitTime =
        Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;
    await pagina.waitForTimeout(randomWaitTime);

    const { precio, titulo } = await pagina.evaluate(() => {
        const contenedor_titulo = document.querySelector('.ui-pdp-header');
        const titulo =
            contenedor_titulo?.querySelector('.ui-pdp-title')?.innerHTML;

        const contenedor_precios = document.querySelector('#price');
        const contenedor_precio = contenedor_precios?.querySelector(
            '.ui-pdp-price__second-line'
        );
        const precio = contenedor_precio?.querySelector(
            '.andes-money-amount__fraction'
        )?.innerHTML;
        const centavos = contenedor_precio?.querySelector('.andes-money-amount__cents')?.innerHTML || '00';

        if (!titulo || !precio) {
            console.log('No se encontró el precio o el nombre.');
            return { titulo: 'Sin nombre', precio: '0' };
        }

        const precio_final = `${precio}.${centavos}`;

        return { titulo, precio: precio_final.replace(/,/g, '') };
    });

    const fecha = new Date().toLocaleDateString('es-MX');
    const hora = new Date().toLocaleTimeString('es-MX');
    fs.appendFileSync(
        csvFilePath,
        `MercadoLibre,${fecha},${hora},"${titulo}",${precio}\n`
    );

    if (Number(precio) < precio_umbral) {

        await twilo_client.messages.create({
            body: `¡El producto "${titulo}" tiene un precio de $${precio}! Revisa aquí: ${url}`,
            from: process.env.TWILIO_FROM_NUMBER!,
            to: process.env.TWILIO_TO_NUMBER!,
        });
    } else {
        console.log('Busqueda concluida');
    }
};

export default mercado_libre;
