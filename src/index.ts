import { chromium } from 'playwright';
import mercado_libre from './scrapers/mercado_libre';

const main = async () => {
    console.log('Iniciando scraping');
    console.log(new Date().toLocaleString(), '\n');

    const navegador = await chromium.launch({ headless: true });
    const context = await navegador.newContext({
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        javaScriptEnabled: true,
        permissions: ['geolocation'],
        locale: 'es-MX',
        viewport: { width: 1366, height: 768 },
    });

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/disco-solido-ssd-interno-kingston-sa400s37480g-sata-iii-480gb-negro/p/MLM17978326#polycard_client=recommendations_home_navigation-trend-recommendations&reco_backend=machinalis-homes-univb&wid=MLM2097560269&reco_client=home_navigation-trend-recommendations&reco_item_pos=1&reco_backend_type=function&reco_id=108fa034-4a37-41ac-920f-8e89d2ea32db&sid=recos&c_id=/home/navigation-trend-recommendations/element&c_uid=48d0beb0-0526-4334-9480-e9be4e5678ca',
        [580, 590, 600, 625],
        'discos_ssd',
        'kingston'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/disco-solido-ssd-interno-adata-ultimate-su630-asu630ss-480gq-r-480gb/p/MLM26797016#polycard_client=search-nordic&wid=MLM852836416&sid=search&searchVariation=MLM26797016&position=9&search_layout=stack&type=product&tracking_id=9fb2a613-6f08-4885-9a3c-425ff05defd6',
        [580, 590, 600, 625],
        'discos_ssd',
        'adata'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/juego-3-sartenes-aluminio-vital-24-26-y-30-cm-tefal-t-fal-color-negro/p/MLM27407751#polycard_client=search-nordic&wid=MLM2581397410&sid=search&searchVariation=MLM27407751&position=2&search_layout=grid&type=product&tracking_id=5dca905f-a929-4ff4-b77b-281ab9f1c74b',
        [600, 650, 700],
        'sartenes',
        'tfal'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/set-de-3-sartenes-vasconia-4023985-en-vitroacero-espatula/p/MLM27411901#polycard_client=search-nordic&wid=MLM2581487814&sid=search&searchVariation=MLM27411901&position=7&search_layout=grid&type=product&tracking_id=f3f3ba4a-18a6-4649-8893-919473ec91c9',
        [500, 550, 600],
        'sartenes',
        'vasconia'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/llanta-firestone-fr710-p-18560r15-84-h/p/MLM17340782#reco_item_pos=0&reco_backend=item_decorator&reco_backend_type=function&reco_client=home_items-decorator-legacy&reco_id=47724f93-00cd-4a1a-8b78-86648f24ef85&reco_model=&c_id=/home/navigation-recommendations-seed/element&c_uid=7e007c7e-e889-4524-9e3f-8eb580cd8ee8&da_id=navigation&da_position=0&id_origin=/home/dynamic_access&da_sort_algorithm=ranker',
        [1400, 1500, 1600],
        'llantas',
        'firestone'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/llanta-tornel-direccional-18560r15-84-s/p/MLM15582578#polycard_client=search-nordic&wid=MLM1925470919&sid=search&searchVariation=MLM15582578&position=8&search_layout=stack&type=product&tracking_id=a49f4215-0521-4e69-8d7f-deec3200107e',
        [900, 1000, 1150],
        'llantas',
        'tornel'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/disco-bumper-35-lbs-altera-hi-temp-olimpico-profesional-color-amarillo/p/MLM29100701#polycard_client=search-nordic&wid=MLM1998554769&sid=search&searchVariation=MLM29100701&position=2&search_layout=stack&type=product&tracking_id=76bd7c4c-488c-4307-9ef0-a97493dc1c2f',
        [990, 1000, 1050],
        'pesas',
        'altera'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/parrilla-electrica-1-quemador-con-asa-placa-acero-timco-color-negro/p/MLM23998798?pdp_filters=item_id:MLM1907393357#is_advertising=true&searchVariation=MLM23998798&position=2&search_layout=stack&type=pad&tracking_id=2c2b7513-807e-4d29-a9f0-60b64bff33af&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=ZmU1NzZmZTUtYTdiOS00YTQ1LTliZDYtYWQ4YjhiMmZjMmJk',
        [90, 100, 125],
        'parrillas',
        'timco'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/juego-de-cubiertos-topon-de-acero-inoxidable-30-piezas/p/MLM33578427#reviews',
        [100, 125, 150],
        'cubiertos',
        'tableware'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/juego-de-cubiertos-de-acero-inoxidable-24-unidades-sunoffer-grueso/p/MLM34121929#polycard_client=search-nordic&wid=MLM2032937827&sid=search&searchVariation=MLM34121929&position=5&search_layout=grid&type=product&tracking_id=51271400-2d2a-4e62-9205-b3c693a6b8ce',
        [100, 125, 150],
        'cubiertos',
        'tableware'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/cortinas-de-bano-impermeable-antimoho-poliester-12-ganchos-180x180cm-joquet/p/MLM42012228#polycard_client=search-nordic&wid=MLM3423146784&sid=search&searchVariation=MLM42012228&position=5&search_layout=grid&type=product&tracking_id=9857b124-2e13-438c-8ae5-c88b5d619f72',
        [70, 80, 90],
        'cortinas_bano',
        'no'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/almohada-spring-air-essence-peach-feel-2-unidades-confort-suave/p/MLM21816453#polycard_client=search-nordic&wid=MLM3425889098&sid=search&searchVariation=MLM21816453&position=14&search_layout=grid&type=product&tracking_id=f73de847-2bf9-47db-8114-124157f05d4a',
        [200, 225, 250],
        'almohadas',
        'spring_air'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/spring-air-paquete-de-2-almohadas-bamboo-estandar-color-verde/p/MLM23953997?pdp_filters=item_id:MLM2263189482#is_advertising=true&searchVariation=MLM23953997&position=2&search_layout=grid&type=pad&tracking_id=c891ef6c-a3b0-4143-966c-194e50641df3&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=NmE5MTIzMWQtZTc4YS00NmI5LTk2YmYtMTNjYmJiMDk5OGI1',
        [300, 350, 400],
        'almohadas',
        'spring_air'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/sognare-nuo-almohada-2-pack-tamano-estandar-relleno-semi-firme/p/MLM22662901#polycard_client=search-nordic&wid=MLM2410609318&sid=search&searchVariation=MLM22662901&position=2&search_layout=grid&type=product&tracking_id=8987aeef-37bb-4744-ac08-f6719f7dc8f5',
        [750, 800, 850],
        'almohadas',
        'sognare'
    );

    await mercado_libre(
        context,
        'https://articulo.mercadolibre.com.mx/MLM-1912644867-set-de-sabanas-matrimonial-2800-hilos-premium-barbara-home-_JM?searchVariation=178858235847#polycard_client=search-nordic&searchVariation=178858235847&position=54&search_layout=grid&type=item&tracking_id=6e812a7c-957b-4156-be65-24732cd02c14',
        [125, 150, 175],
        'sabanas',
        'no'
    );

    await mercado_libre(
        context,
        'https://www.mercadolibre.com.mx/colchon-matrimonial-voltti-flip-doble-confort-20-cm-reversible-con-2-diferentes-firmezas-nano-memory-foam-ergonomico-y-ortopedico-disminuye-puntos-de-presion/p/MLM23997499?pdp_filters=item_id:MLM2272380432#is_advertising=true&searchVariation=MLM23997499&position=1&search_layout=grid&type=pad&tracking_id=4a614400-1899-474b-8664-967e70ebfc57&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=ZWI0MmRjZjItZjViNS00ODdjLWEyMzYtMmRkZDEzZmU0ZGM0',
        [3000, 3250, 3500],
        'colchones',
        'voltti'
    );

    console.log('Scraping concluido');

    await context.close();
    await navegador.close();
};

main();
