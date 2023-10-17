function doGet(e) {
  Logger.log(e);

  // css, script 파일을 분리했기때문에 단순 page 파일 리턴 대신 전체 page 를 생성해서 리턴해야 한다.
  //return HtmlService.createHtmlOutputFromFile("page");
  return HtmlService.createTemplateFromFile("page").evaluate();
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

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
