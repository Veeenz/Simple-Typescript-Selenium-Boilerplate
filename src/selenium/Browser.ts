import { Builder, WebDriver } from "selenium-webdriver";

class Browser {

  public static async init(): Promise<Browser> {
      const browser = new Browser();
      browser.driver = await browser.createDriver();
      return browser;
  }

  private driver: WebDriver;
  private browserType: string = "chrome";

  public navigate(url: string) {
    this.driver.get("http://google.it");
  }

  private async createDriver(): Promise<WebDriver> {
    return await new Builder().forBrowser(this.browserType).build();
  }

  private async close() {
    return await this.driver.quit();
  }

}

export default Browser;
