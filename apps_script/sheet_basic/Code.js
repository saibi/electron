// use macro function to capture prototype code



// function validation() {
//   let validationRange = sheet.getRange(xxxx);
//   let validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange);

//   activeCell.setDataValidation(varidationRule)
// }

function onEdit() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let timeStamp = new Date().getSeconds();
  let cell = sheet.getActiveCell();
  sheet.getRange("A30").setValue("onEdit " + timeStamp + " [" + cell.getRow() + "," + cell.getColumn() +"]" );
  
  cell.offset(0, 1).setValue("neighbor");

}

function getAllSheets() {
  let appl = SpreadsheetApp;
  let sheets = appl.getActiveSpreadsheet().getSheets();

  Logger.log(sheets);
  let ret = [];
  for ( let i = 0; i< sheets.length; i++) {
    Logger.log(sheets[i].getName());
    ret.push(sheets[i].getName());
  }  
  return ret;
}
function GETALLSHEETSNAME()
{
  return getAllSheets();
}

function findCell(val) {
  let appl = SpreadsheetApp;
  let ss = appl.getActiveSpreadsheet();
  let sheet1 = ss.getSheetByName("시트1");
  
  let values = sheet1.getDataRange().getValues();

  for (let row = 0; row < values.length; row++) {
    let col = values[row].indexOf(val); 
    if ( col > -1 ) {
        let r = row + 1;
        let c = col + 1;
        Logger.log("found: Row " + r + ", Col " + c + " = " + values[row][col]);
    }
  }
}

function findColumn(rowNumber, text) {
  rowNumber = 18;
  text = "brand";

  let appl = SpreadsheetApp;
  let ss = appl.getActiveSpreadsheet();
  let sheet1 = ss.getSheetByName("시트1");
  
  let lastCol = sheet1.getLastColumn();

  let lookupRange = sheet1.getRange(rowNumber, 1, 1, lastCol);
  let values = lookupRange.getValues();

  Logger.log(values);

  findCell("date");

}


function getTheFiles() {
  let folderIter = DriveApp.getFoldersByName("apps script");
  
  //let files = DriveApp.getFilesByName("apps script");

  let myFolder = folderIter.next();

  let filesIter = myFolder.getFiles();

  while ( filesIter.hasNext() ) {
    let file = filesIter.next();
    Logger.log(file.getName());
    Logger.log(file.getSize());
//    file.getDownloadUrl()
  }
  // file.makeCopy(folder)
}

function learnBasic() {
  Logger.log("hello");

  let appl = SpreadsheetApp;
  let ss = appl.getActiveSpreadsheet();
  let sheet = ss.getActiveSheet();

  sheet.getRange("c2:d4").setValue(99);
  sheet.getRange(2, 7, 2, 1).setValue("hoho");

  let tmp = sheet.getRange(2, 1).getValue(); // getDisplayValue()
  Logger.log(tmp);
  sheet.getRange(6, 6).setValue(tmp);

  let val = sheet.getRange(7, 1).getValue();
  Logger.log(val);
  sheet.getRange(7, 1).setValue(val + 10);
  
  for ( let i = 0 ; i < 5; i++ ) {
    val = sheet.getRange(7 + i, 1).getValue();
    val += 100;
    sheet.getRange(7+i, 1+1).setValue(val);
  }

  let sheet1 = ss.getSheetByName("시트1");
  clearTheMess(sheet1);

  let temp = sheet.getRange("A7:B11").getValues();
  Logger.log(temp);

  sheet1.getRange("D8:E12").setValues(temp);

  sheet1.getRange("C7").setFormula("=A7+B7");

  let lastRow = sheet1.getLastRow();
  let fillDownRange = sheet1.getRange(8, 3, lastRow - 8, 1);
  sheet1.getRange("C7").copyTo(fillDownRange);

  let sheet2 = ss.getSheetByName("sheet2");
  sheet2.getRange(1,1).setValue("this is sheet2");

  // dumpCalendarEvents(sheet2);

  // sheetToCalendar();

  // Browser.msgBox("Hello World");
}

function evaluateTemplateText(templateText, obj) {
  let newMsg = templateText;
  for (let key in obj) {
    newMsg = newMsg.replace("{" + key + "}", obj[key]);
  }
  return newMsg;
}

function mapDistance() {

  let mapObj = Maps.newDirectionFinder();

  let start = "355 Chalan Pasaheru B224-A, Tamuning, 96913, Guam";
  let end = "199 Chalan San Antonio, Tamuning, 96913, Guam";

  mapObj.setOrigin(start);
  mapObj.setDestination(end);
  let directions = mapObj.getDirections();
  Logger.log(directions["routes"][0]["legs"][0]["distance"]);
  Logger.log(directions["routes"][0]["legs"][0]["duration"]);
}

function objTest() {
  let appl = SpreadsheetApp;
  let ss = appl.getActiveSpreadsheet();
  let sheet1 = ss.getSheetByName("시트1");
  
  let templateText = sheet1.getRange("A16").getValue();  
  let info = { name: "foo", msg : "Hello World"};

  sheet1.getRange("B16").setValue(evaluateTemplateText(templateText, info));
}

function popupHello() {
  Browser.msgBox("Hello World!!!" );

}

function sheetToCalendar() {
  let appl = SpreadsheetApp;
  let ss = appl.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("cal_input");

  let data = sheet.getRange(2, 1, sheet.getLastRow() -1, 5).getValues();
  
  let cal = CalendarApp.getDefaultCalendar();  

  for ( let i = 0 ; i < data.length; i++ ) {
    Logger.log(data[i]);
    cal.createEvent( data[i][0], data[i][1], data[i][2], { location: data[i][3], description: data[i][4]});
  }


}

function dumpCalendarEvents(sheet) {
  let cal = CalendarApp.getDefaultCalendar();  
  let events = cal.getEvents(new Date("2023-10-1"), new Date("2023-10-30"));

  events.forEach(function(event) {
    let row = [ event.getTitle(), event.getStartTime(), event.getEndTime(), event.getDescription()];
    sheet.appendRow(row);  
  });
}

function clearTheMess( sheet ) {
  // see clearXXXX
  sheet.getRange("C1:M20").clearContent();
}

/**
 * Multiplies the given number by 5
 * @param x A number that will be multiplied
 * @customfunction
 */
function MULTIPLYBY5(x) {
  return x * 5;
}

/**
 * Multiplies 2 numbers
 * @param arg1 one of the numbers for multiplication
 * @param arg2 second number for multiplication
 * @customfunction
 */
function MULTIPLY2NUMBERS(arg1, arg2) {
  return arg1 * arg2;
}