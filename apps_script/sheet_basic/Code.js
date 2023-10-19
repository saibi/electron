function learnBasic() {
  Logger.log("hello");

  let appl = SpreadsheetApp;
  let ss = appl.getActiveSpreadsheet();
  let sheet = ss.getActiveSheet();
  sheet.getRange("c2:d4").setValue(99);

  sheet.getRange(2, 7, 2, 1).setValue("hoho");

  let tmp = sheet.getRange(2, 1).getValue();
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