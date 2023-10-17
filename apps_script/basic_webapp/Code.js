const url =
  "https://docs.google.com/spreadsheets/d/1kY30eXsn4Ym_FJe4Nat1g4yDVh589quFqquiwC104Xs/edit#gid=387912833";

function doGet(e) {
  Logger.log(e);

  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("basic_webapp_options");
  let list = ws
    .getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1)
    .getValues();

  let htmlListArray = list
    .map(function (r) {
      return "<option>" + r[0] + "</option>";
    })
    .join("");

  var tmp = HtmlService.createTemplateFromFile("page");
  tmp.list = htmlListArray;
  return tmp.evaluate();
}

function userClicked(userInfo) {
  Logger.log(`${JSON.stringify(userInfo)} clicked the Button.`);

  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("basic_webapp");

  ws.appendRow([
    userInfo.firstName,
    userInfo.lastName,
    userInfo.app,
    userInfo.zip,
    userInfo.est,
    new Date(),
  ]);
}

function getCost(zipCode) {
  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("basic_webapp_estimate");
  let data = ws.getRange(1, 1, ws.getLastRow(), 2).getValues();

  let zipCodeList = data.map(function (r) {
    return r[0];
  });
  let costList = data.map(function (r) {
    return r[1];
  });

  let position = zipCodeList.indexOf(zipCode);

  if (position > -1) {
    return "$" + costList[position].toFixed(2);
  } else {
    return "Unavailable";
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
