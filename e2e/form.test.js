import puppeteer from "puppeteer";

jest.setTimeout(10000); // default puppeteer timeout

describe("Inn Form", () => {
  let browser;
  let page;
  const baseUrl = "http://localhost:9000";

  //запуск браузера
  beforeEach(async () => {
    browser = await puppeteer.launch({
      //опции при запуске браузера
      headless: false, //чтобы показывать реальный браузер
      slowMo: 500,
      devtools: true, //чтобы видеть инструменты разработчика
    });

    page = await browser.newPage(); // браузер откроет новую страницу.
  });

  test("Form tooltip should add .active class", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".container"); //этот метод заставит браузер ждать появления селектора body
    
    // tooltip
    const form = await page.$('.container');
    const submit = await form.$('.btn');
    // click по button
    await submit.click();

    // проверка
    await page.waitForSelector('.tooltip .active')
  });

  //закрыть браузер
  afterEach(async () => {
      await browser.close();
    });
  });