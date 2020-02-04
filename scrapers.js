
const puppeteer = require ('puppeteer');
async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
   
    const [el] = await page.$x('//*[@id="carouselDetails"]/div/div[1]/ngx-image-zoom/div/div/img');
    const src = await el.getProperty('src');
    const img = await src.jsonValue();
   
    const [el2] = await page.$x('/html/body/app-root/div/app-details/div[1]/le-card-details/div/div/div[2]/div[4]/span');
    const txt = await el2.getProperty('textContent');
    const price = await txt.jsonValue();
   
    const [el3] = await page.$x('/html/body/app-root/div/app-details/div[1]/le-card-details/div/div/div[2]/p');
    const txt2 = await el3.getProperty('textContent');
    const title = await txt2.jsonValue();
   
    console.log({img, title, price });
   
    browser.close();
}

scrapeProduct('https://www.laeuropea.com.mx/productos/licor-de-chile-poblano-ancho-reyes-verde-750-ml');