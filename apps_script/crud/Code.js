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
