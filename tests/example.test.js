describe("Google Homepage", () => {
  beforeAll(async () => {
    jest.setTimeout(15000);
    await page.goto("https://google.com");
  });

  it("should load google home page", async () => {
    await page.waitForSelector('input[name="q"]');
    jest.setTimeout(15000);
    let title = await page.title();
    console.log("Title is" + title);
  }, 100000);
});
