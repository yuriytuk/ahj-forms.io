import puppeteer from "puppeteer";

describe("page start", () => {
  let browser;
  let page;
  const baseUrl = "http://localhost:9000";

  //запуск браузера
  beforeEach(async () => {
    browser = await puppeteer.launch({
      //опции при запуске браузера
      headless: false, //чтобы показывать реальный браузер
      slowMo: 100,
      devtools: true, //чтобы видеть инструменты разработчика
    });

    page = await browser.newPage(); // браузер откроет новую страницу.
  });
  // тесты пишет в асинхронно
  test("test", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector("body"); //этот метод заставит браузер ждать появления селектора body
  });

  //закрыть браузер
  afterEach(async () => {
      await browser.close();
    });
});