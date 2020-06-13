import { WebDriver, TargetLocator, By } from "selenium-webdriver";

abstract class Selenium {

  protected driver: WebDriver;
  protected browserType: string;

  public abstract init(): void;
  public abstract async close(): Promise<any>;
  protected abstract async navigate(url: string): Promise<any>;
  protected abstract createDriver(): WebDriver;
}

export default Selenium;
