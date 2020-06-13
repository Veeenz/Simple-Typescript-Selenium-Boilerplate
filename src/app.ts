import Browser from "./selenium/Browser";

const run = async () => {
  const browser = new Browser();
  browser.navigate("http://google.it");
};

run();
