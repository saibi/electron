function doGet(e) {
  Logger.log("log test");
  Logger.log(e);

  return HtmlService.createHtmlOutputFromFile("page");
}

function userClicked(name) {
  Logger.log(name + " clicked the Button.");
  Logger.log(`${name} clicked the Button. formatting test`);

  const url =
    "https://docs.google.com/spreadsheets/d/1kY30eXsn4Ym_FJe4Nat1g4yDVh589quFqquiwC104Xs/edit#gid=387912833";
  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("basic_webapp");

  ws.appendRow([new Date(), name]);
}
