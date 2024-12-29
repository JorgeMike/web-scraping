import path from 'path';
import fs from 'fs';

const csv_exist = (csv_name: string) => {
    const csvFilePath = path.resolve(`src/csv/${csv_name}.csv`);

    // Verifica si el archivo CSV ya existe; si no, crea el encabezado
    if (!fs.existsSync(csvFilePath)) {
        fs.writeFileSync(
            csvFilePath,
            'Plataforma,Fecha,Hora,Nombre,Marca,Precio\n'
        );
    }

    return csvFilePath;
};

const csv_saver = (
    csvFilePath: string,
    plataforma: string,
    titulo: string,
    brand: string,
    precio: string
) => {
    const fecha = new Date().toLocaleDateString('es-MX');
    const hora = new Date().toLocaleTimeString('es-MX');

    fs.appendFileSync(
        csvFilePath,
        `${plataforma},${fecha},${hora},"${titulo}","${brand}",${precio}\n`
    );
};

export { csv_exist, csv_saver };
