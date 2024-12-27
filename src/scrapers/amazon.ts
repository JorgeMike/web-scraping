import { BrowserContext } from 'playwright';
import { message_sender } from '../utils/twilo';
import { csv_exist, csv_saver } from '../utils/csv';
import { mouse_move, scroll_move, wait_random_time } from '../utils/events';

const amazon = async (
    contexto: BrowserContext,
    url: string,
    precio_umbral: number,
    csv_name: string
) => {
    console.log('Iniciando scraping de Amazon');
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
                const main_container = document.querySelector('#centerCol');

                const titulo =
                    main_container?.querySelector('#productTitle')?.innerHTML;
                const precio =
                    main_container?.querySelector('.a-price-whole')?.innerHTML;
                const centavos =
                    main_container?.querySelector('.a-price-fraction')
                        ?.innerHTML || '00';

                const precio_final = `${precio
                    ?.replace('$', '')
                    .replace(/,/g, '')
                    .replace(
                        '<span class="a-price-decimal">.</span>',
                        ''
                    )}.${centavos}`;

                return { titulo, precio: precio_final };
            }
        );

        csv_saver(csvFilePath, 'Amazon', titulo, precio);

        if (Number(precio) < precio_umbral) {
            message_sender(titulo, precio, url);
        }
        
    } catch (error) {
        console.error(`Error, ${csv_name}`, error);
    } finally {
        console.log('Scraping de Mercado Libre concluido \n');
        await pagina.close();
    }
};

export default amazon;
