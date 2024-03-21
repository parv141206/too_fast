import puppeteer from "puppeteer";

export async function scrapeDivyaBhaskar() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.divyabhaskar.com/");
  console.log("huh");

  await page.evaluate(() => {
    window.scrollTo(0, 10000 * window.innerHeight); // Increase the scroll distance
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
        text: title.textContent, // Extract the text content of the element
        link: aTag ? aTag.href : null, // Extract the href attribute of the <a> tag
        location: location ? location.textContent : null,
      };
    });
  });

  const res = {
    source: "Divya Bhaskar",
    articles: data, // Store the extracted text and links
  };

  // console.log(res);
  await browser.close();
  return res;
}
