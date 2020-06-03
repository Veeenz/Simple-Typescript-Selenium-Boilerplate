import Browser from "./selenium/Browser";

Browser.init().then((seleniumBrowser: Browser) => {
  const browser = seleniumBrowser;
  browser.navigate("http://google.it");
});
