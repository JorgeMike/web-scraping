import { BrowserContext } from 'playwright';
import { message_sender } from '../utils/twilo';
import { csv_exist, csv_saver } from '../utils/csv';
import { mouse_move, scroll_move, wait_random_time } from '../utils/events';

const mercado_libre = async (
    contexto: BrowserContext,
    url: string,
    precios_umbral: number[],
    csv_name: string
) => {
    console.log('Iniciando scraping de Mercado Libre');
    const csvFilePath = csv_exist(csv_name);

    const pagina = await contexto.newPage();

    await pagina.goto(url, {
        waitUntil: 'domcontentloaded',
    });

    try {
        await wait_random_time(pagina);

        await mouse_move(pagina);

        await scroll_move(pagina);

        const { precio = '0', titulo = 'Sin nombre' } = await pagina.evaluate(
            () => {
                const contenedor_titulo =
                    document.querySelector('.ui-pdp-header');
                const titulo =
                    contenedor_titulo?.querySelector(
                        '.ui-pdp-title'
                    )?.innerHTML;

                const contenedor_precios = document.querySelector('#price');
                const contenedor_precio = contenedor_precios?.querySelector(
                    '.ui-pdp-price__second-line'
                );
                const precio = contenedor_precio?.querySelector(
                    '.andes-money-amount__fraction'
                )?.innerHTML;
                const centavos =
                    contenedor_precio?.querySelector(
                        '.andes-money-amount__cents'
                    )?.innerHTML || '00';

                const precio_final = `${precio}.${centavos}`;

                return { titulo, precio: precio_final.replace(/,/g, '') };
            }
        );

        csv_saver(csvFilePath, 'MercadoLibre', titulo, precio);

        const precioNumerico = Number(precio);
        const precioMeta = precios_umbral.find((p) => precioNumerico < p);

        if (precioMeta) {
            message_sender(titulo, precio, url, 'Mercado Libre', precioMeta);
        }

    } catch (error) {
        console.error(`Error, ${csv_name}`, error);
    } finally {
        console.log('Scraping de Mercado Libre concluido \n');

        await pagina.close();
    }
};

export default mercado_libre;
