import puppeteer from "puppeteer";

export async function scrapeGujaratSamachar() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.gujaratsamachar.com/");
  console.log("huh");

  await page.evaluate(() => {
    window.scrollTo(0, 10000 * window.innerHeight); // Increase the scroll distance
  });

  await page.waitForFunction(
    'document.querySelectorAll(".news-title").length > 0'
  );

  const data = await page.evaluate(() => {
    const elements = document.querySelectorAll(".news-title");
    return Array.from(elements).map((element) => {
      const aTag = element.querySelector("a");
      return {
        text: element.textContent,
        link: element.href,
      };
    });
  });

  const res = {
    source: "Gujarat Samachar",
    articles: data,
  };

  console.log(res);
  await browser.close();
  return res;
}
