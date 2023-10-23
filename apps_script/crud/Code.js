function doGet(e) {
  let tmp = HtmlService.createTemplateFromFile("main");
  return tmp.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function loadPage(filename) {
  let html = HtmlService.createTemplateFromFile(filename);
  return html.evaluate().getContent();
}

function getDataForSearch() {
  const ID = "1J6ziO5HBU7R9ulIvr8dENhZgKqE6p9KWRZ-PBX93lEg";
  let ss = SpreadsheetApp.openById(ID);
  let data = ss.getSheetByName("data").getDataRange().getValues();

  let headers = data.shift();
  let result = [];
  data.forEach(function (row) {
    let obj = {};
    headers.forEach(function (header, i) {
      obj[header] = row[i];
    });
    result.push(obj);
  });
  let ret = JSON.stringify(result);
  return ret;
}
