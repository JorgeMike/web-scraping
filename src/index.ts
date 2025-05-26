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
    'https://www.mercadolibre.com.mx/juego-de-cubiertos-topon-de-acero-inoxidable-30-piezas/p/MLM33578427#reviews',
    [100, 125, 150],
    'cubiertos',
    'tableware'
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
    'https://www.mercadolibre.com.mx/colchon-matrimonial-voltti-flip-doble-confort-20-cm-reversible-con-2-diferentes-firmezas-nano-memory-foam-ergonomico-y-ortopedico-disminuye-puntos-de-presion/p/MLM23997499?pdp_filters=item_id:MLM2272380432#is_advertising=true&searchVariation=MLM23997499&position=1&search_layout=grid&type=pad&tracking_id=4a614400-1899-474b-8664-967e70ebfc57&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=ZWI0MmRjZjItZjViNS00ODdjLWEyMzYtMmRkZDEzZmU0ZGM0',
    [3000, 3250, 3500],
    'colchones',
    'voltti'
  );

  await mercado_libre(
    context,
    'https://www.mercadolibre.com.mx/audifonos-inalambricos-samsung-galaxy-buds-fe-blanco/p/MLM29107883#polycard_client=search-nordic&wid=MLM2778020948&sid=search&searchVariation=MLM29107883&position=8&search_layout=stack&type=product&tracking_id=3308eb28-c36a-4d08-9e4a-6458a3516704',
    [900, 1100, 1200],
    'audifonos',
    'samsung'
  );

  await mercado_libre(
    context,
    'https://www.mercadolibre.com.mx/samsung-galaxy-buds-3-pro-r630-plata-color-plateado-luz-verde/p/MLM40496872#polycard_client=search-nordic&searchVariation=MLM40496872&wid=MLM2247292933&position=3&search_layout=grid&type=product&tracking_id=be881a62-1bdf-4c3e-a5a3-c5d5b7c53a26&sid=search',
    [1],
    'audifonos',
    'samsung'
  );

  await mercado_libre(
    context,
    'https://www.mercadolibre.com.mx/auriculares-samsung-galaxy-buds-3-pro-color-plata/p/MLM39414053#polycard_client=search-nordic&searchVariation=MLM39414053&wid=MLM2162454677&position=8&search_layout=grid&type=product&tracking_id=8d06382f-0139-4e4b-b4c1-d19fe9ead995&sid=search',
    [1],
    'audifonos',
    'samsung'
  );

  await mercado_libre(
    context,
    'https://www.mercadolibre.com.mx/refrigerador-frigobar-hisense-rr33d6agx1-color-gris-con-capacidad-de-93l/p/MLM19818777#polycard_client=navigation&wid=MLM1684916186&sid=navigation',
    [2800, 2900, 3000],
    'frigobar',
    'hisense'
  );

  await mercado_libre(
    context,
    'https://articulo.mercadolibre.com.mx/MLM-1402410801-tenis-para-hombre-nike-court-vision-low-next-nature-_JM?searchVariation=174386428942#polycard_client=search-nordic&searchVariation=174386428942&position=3&search_layout=grid&type=item&tracking_id=d60e4db4-081a-4219-ba3b-47afd9543d4d',
    [1000, 1100, 1200],
    'tenis',
    'nike'
  );

  await mercado_libre(
    context,
    'https://articulo.mercadolibre.com.mx/MLM-1310989364-tenis-para-hombre-nike-court-royale-_JM?searchVariation=173658924859#polycard_client=search-nordic&searchVariation=173658924859&position=1&search_layout=grid&type=item&tracking_id=214b4e25-f3c5-4e5b-8f4d-2be68e271101',
    [1000, 1100, 1200],
    'tenis',
    'nike'
  );

  await mercado_libre(
    context,
    'https://www.mercadolibre.com.mx/silla-de-escritorio-boen-yt-588-ergonomica-gris-y-blanca-con-tapizado-de-malla/p/MLM28115753?pdp_filters=item_id:MLM2025673119#is_advertising=true&searchVariation=MLM28115753&position=3&search_layout=grid&type=pad&tracking_id=ce67d632-4219-4a5f-975e-aede75209e9f&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=3&ad_click_id=ZTI5YWI3NDktNzViZC00ODM2LTg1OGEtOGEzMGUwZTc1ODEw',
    [1000, 1100, 1200],
    'sillas',
    'boen'
  );

  await mercado_libre(
    context,
    'https://www.mercadolibre.com.mx/silla-de-oficina-ejecutiva-reclinable-ergonomica-reposapies-color-negro/p/MLM23039205?pdp_filters=item_id:MLM2152854718#is_advertising=true&searchVariation=MLM23039205&position=1&search_layout=grid&type=pad&tracking_id=ebc6e957-0b7b-4b71-b1db-dea1986a1c0d&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=ZjUwMTY4ZDctZDRlNi00NTM3LThhYTAtYWQyNzJkY2RhOGU1',
    [1000, 1100, 1200],
    'sillas',
    'ouo'
  );

  console.log('Scraping concluido');

  await context.close();
  await navegador.close();
};

main();
