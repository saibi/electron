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
    userInfo.chip.join(),
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

function getCalendarBusyDays() {
  let calendar = CalendarApp.getDefaultCalendar();

  let startDate = new Date();
  let endDate = new Date();
  endDate.setMonth(startDate.getMonth() + 1);

  let events = calendar.getEvents(startDate, endDate);

  let days = events.map(function (e) {
    return e.getStartTime().setHours(0, 0, 0, 0);
  });

  let uniqueDays = [...new Set(days)];

  return uniqueDays;
}

function getWords() {
  let ss = SpreadsheetApp.openByUrl(url);
  let ws = ss.getSheetByName("basic_webapp_options");
  let data = ws.getRange(1, 3).getDataRegion().getValues();

  let options = {};
  data.forEach(function (row) {
    options[row[0]] = null;
  });
  return options;
}
