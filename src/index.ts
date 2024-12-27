import { chromium } from 'playwright';
import mercado_libre from './scrapers/mercado_libre';
import amazon from './scrapers/amazon';

const main = async () => {
    console.log('Iniciando scraping');
    console.log(new Date().toLocaleString(), '\n');

    const navegador = await chromium.launch({ headless: true });
    const contexto = await navegador.newContext({
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        javaScriptEnabled: true,
        permissions: ['geolocation'],
        locale: 'es-MX',
        viewport: { width: 1366, height: 768 },
    });

    await mercado_libre(
        contexto,
        'https://www.mercadolibre.com.mx/disco-solido-ssd-interno-kingston-sa400s37480g-sata-iii-480gb-negro/p/MLM17978326#polycard_client=recommendations_home_navigation-trend-recommendations&reco_backend=machinalis-homes-univb&wid=MLM2097560269&reco_client=home_navigation-trend-recommendations&reco_item_pos=1&reco_backend_type=function&reco_id=108fa034-4a37-41ac-920f-8e89d2ea32db&sid=recos&c_id=/home/navigation-trend-recommendations/element&c_uid=48d0beb0-0526-4334-9480-e9be4e5678ca',
        590,
        'ssd'
    );
    await amazon(
        contexto,
        'https://www.amazon.com.mx/Kingston-SA400S37-480G-Unidad-Estado/dp/B01N0TQPQB/ref=sr_1_1?crid=3HEMXIPB7M863&dib=eyJ2IjoiMSJ9.79byRMh-oU1dpKXHY5QOwPqaQDQdvy4dXLgJE-sU5At0LA7sDLRDArvBE_xdKghJI00sKsRQs8pt3u1fn-di5TXFiimpf6sWnKC-fNEb1eWv7f_X3X00ztIHkfg472GzlcDLFD1LPSgALAycIs83I5w6KXLBllqrzkdpCHrZdC8aDh_aQeO9leW9agGaoIOf2gwcVia7nLujGy7sG5fvhCHAagO2pXhNJLabSbGdiSKv3oVcx_AfncKx_ehfSlNXoXe8rW07OEI1JgdnGlZG5fgQFoI1ewXvdfJzMrUO1UR9AanUvB3ow_Ljryuy9BcrmqYL7TGqgjU451A3AI47q4QGX2JrHRiQISE8zIpWgYWU_6ymbmzwoVmGjCeObM2VUe6DLld0wrAvjApjjmcf28W2DWQI2rsQukenqJ2KwiQWyBf38BYG7qBsUZhTSrsa.GW_LtwoExPkkrEEKJ7kxBdk5EeYgE7uDpkilfD2tXp0&dib_tag=se&keywords=ssd%2B480%2Bkingston&qid=1735234787&sprefix=ssd%2B480%2B%2Caps%2C149&sr=8-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b&th=1',
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
    await amazon(
        contexto,
        'https://www.amazon.com.mx/Olimpico-Cubierto-Inoxidable-Acondicionamiento-Levantamiento/dp/B0BYF3KD9L/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2EIEVB8ZVDOUN&dib=eyJ2IjoiMSJ9.s3mZVfFnThiRBZIUO71hUi5xO6XZVeK_BK91p9V1AcgJtauscRV-MkaEKZdIzcs0Qxms5-5CUpOOizWuf3vDCDsU6Qso69SJK6yo8tW9zuwVLzyvsPe0DWzFQxL_qSxYIYmMx-4LnJ8gZiGMEzwaNYwSnPEXgSqnk2rfO6ew9pO2Wh-hljeZ5cDZb814ht18EheMZZzf88tafJa2iYNALaPnSQAW_Ko6Att1uwvZrufQXXEhx-t7FwYebaADQMcYxlEJEgE0qgIkbHDii5Wd2m3ZtG3Vn-5u6leUBoDJcM_499X4rBpyNktjYfaeXprYU5NIqyGuO7ScT9XrDlJndqH5fsfNmQBeYISXi4CifyIGXJZiXZDH89jIucu_nD1lxLPLB2UsZQ1qWpc8_jaQF6QIEuEB3csaedPbiUrhncrDlpcz894MyUhFbbu9GCrn.ul_wIFQC2oGoo4z9jKJLjtfV5_c465F92QKrsJOy_90&dib_tag=se&keywords=disco+bumper+35+lb+altera&qid=1735258409&sprefix=disco+bumper+35+lbs+altera%2Caps%2C135&sr=8-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b',
        1000,
        'disco'
    );

    await contexto.close();
    await navegador.close();
};

main();
