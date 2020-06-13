import { Builder, WebDriver } from "selenium-webdriver";
import Selenium from "./Selenium";

class Browser extends Selenium {

  protected driver: WebDriver;
  protected browserType: string = "chrome";

  constructor() {
    super();
    this.init();
  }

  public async close(): Promise<void> {
    return await this.driver.quit();
  }

  public async navigate(url: string): Promise<any> {
    console.debug("Browser::Navigation");
    return await this.driver.get(url);
  }

  public init(): void {
      this.driver = this.createDriver();
  }

  protected createDriver(): WebDriver {
    return new Builder().forBrowser(this.browserType).build();
  }

}

export default Browser;
