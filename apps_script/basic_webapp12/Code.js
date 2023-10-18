const url =
  "https://docs.google.com/spreadsheets/d/1kY30eXsn4Ym_FJe4Nat1g4yDVh589quFqquiwC104Xs/edit#gid=387912833";

let Route = {};
Route.path = function (reoute, callback) {
  Route[reoute] = callback;
};

function doGet(e) {
  Logger.log(e);

  Route.path("form", loadForm);
  Route.path("about", loadAbout);
  Route.path("table", loadTable);

  if (Route[e.parameters.v]) {
    return Route[e.parameters.v]();
  } else {
    return render("home");
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

  // var tmp = HtmlService.createTemplateFromFile("page");
  // tmp.list = htmlListArray;
  // return tmp.evaluate();
  return render("page", { list: htmlListArray });
}

function loadAbout() {
  return render("about", { title: "Use This Title", other: "Other Stuff" });
}

function loadTable() {
  return render("table");
}
