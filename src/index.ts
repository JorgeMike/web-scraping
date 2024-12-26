import { chromium } from 'playwright';
import mercado_libre from './scrapers/mercado_libre';

const main = async () => {
    const navegador = await chromium.launch({ headless: false });
    const contexto = await navegador.newContext({
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        javaScriptEnabled: true,
        permissions: ['geolocation'],
        locale: 'es-MX',
        viewport: { width: 1366, height: 768 },
    });

    try {
        await mercado_libre(
            contexto,
            'https://www.mercadolibre.com.mx/disco-solido-ssd-interno-kingston-sa400s37480g-sata-iii-480gb-negro/p/MLM17978326#polycard_client=recommendations_home_navigation-trend-recommendations&reco_backend=machinalis-homes-univb&wid=MLM2097560269&reco_client=home_navigation-trend-recommendations&reco_item_pos=1&reco_backend_type=function&reco_id=108fa034-4a37-41ac-920f-8e89d2ea32db&sid=recos&c_id=/home/navigation-trend-recommendations/element&c_uid=48d0beb0-0526-4334-9480-e9be4e5678ca',
            590,
            'ssd'
        );

        await mercado_libre(
            contexto,
            'https://www.mercadolibre.com.mx/llanta-firestone-fr710-p-18560r15-84-h/p/MLM17340782#reco_item_pos=0&reco_backend=item_decorator&reco_backend_type=function&reco_client=home_items-decorator-legacy&reco_id=47724f93-00cd-4a1a-8b78-86648f24ef85&reco_model=&c_id=/home/navigation-recommendations-seed/element&c_uid=7e007c7e-e889-4524-9e3f-8eb580cd8ee8&da_id=navigation&da_position=0&id_origin=/home/dynamic_access&da_sort_algorithm=ranker',
            1500,
            'llanta'
        );

        await mercado_libre(
            contexto,
            'https://www.mercadolibre.com.mx/disco-bumper-35-lbs-altera-hi-temp-olimpico-profesional-color-amarillo/p/MLM29100701#polycard_client=search-nordic&wid=MLM1998554769&sid=search&searchVariation=MLM29100701&position=2&search_layout=stack&type=product&tracking_id=76bd7c4c-488c-4307-9ef0-a97493dc1c2f',
            1000,
            'disco'
        );
        
    } catch (error) {
        console.error('Error al abrir la página:', error);
    } finally {
        await contexto.close();
        await navegador.close();
    }
};

main();
