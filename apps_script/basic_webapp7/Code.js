const url =
  "https://docs.google.com/spreadsheets/d/1kY30eXsn4Ym_FJe4Nat1g4yDVh589quFqquiwC104Xs/edit#gid=387912833";

function doGet(e) {
  Logger.log(e);

  if (e.parameters.v == "form") {
    return loadForm();
  } else {
    let home = HtmlService.createTemplateFromFile("home");
    return home.evaluate();
  }
}

function loadForm() {
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
