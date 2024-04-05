import puppeteer from "puppeteer";

export async function scrapeDivyaBhaskar() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.divyabhaskar.com/");
  console.log("huh");

  await page.evaluate(() => {
    window.scrollTo(0, 10000 * window.innerHeight);
  });

  await page.waitForFunction(
    'document.querySelectorAll(".c7ff6507").length > 0',
  );

  const data = await page.evaluate(() => {
    const elements = document.querySelectorAll(".c7ff6507");
    return Array.from(elements).map((element) => {
      const title = element.querySelector("h3");
      const aTag = element.querySelector("a");
      const location = element.querySelector(".fd4e34d0");
      return {
        text: title.textContent,
        link: aTag ? aTag.href : null,
        location: location ? location.textContent : null,
      };
    });
  });

  const res = {
    source: "Divya Bhaskar",
    articles: data,
  };

  await browser.close();
  return res;
}
