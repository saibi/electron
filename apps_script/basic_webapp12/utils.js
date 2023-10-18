function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function render(file, argsObject) {
  let tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    let keys = Object.keys(argsObject);
    keys.forEach(function (k) {
      tmp[k] = argsObject[k];
    });
  }
  // return tmp.evaluate();
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
