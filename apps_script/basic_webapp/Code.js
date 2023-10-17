function doGet(e) {
  Logger.log(e);

  return HtmlService.createHtmlOutputFromFile("page");
}

function userClicked(userInfo) {
  Logger.log(`${JSON.stringify(userInfo)} clicked the Button.`);

  const url =
    "https://docs.google.com/spreadsheets/d/1kY30eXsn4Ym_FJe4Nat1g4yDVh589quFqquiwC104Xs/edit#gid=387912833";
  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("basic_webapp");

  ws.appendRow([
    userInfo.firstName,
    userInfo.lastName,
    userInfo.app,
    new Date(),
  ]);
}
