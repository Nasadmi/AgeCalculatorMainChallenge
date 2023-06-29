import { StyleError, NumberAnimation } from "./styles.js";
import { Errors, isNumberGreaterThanCurrentMonth } from "./error.js";
import {
  Elements,
  currentDay,
  currentMonth,
  currentYear,
  date,
} from "./vars.js";
import { Calculate, StringToNumber } from "./logic.js";

const btn = document.getElementById("btn-svg-icon");

let intervals;

function Main() {
  let data_day = Elements.input_day.value;
  let data_month = Elements.input_month.value;
  let data_year = Elements.input_year.value;
  // Clean spam values so that in case of changing the error or there is no error, there are no problems
  Elements.alert_day.innerHTML = ``;
  Elements.alert_month.innerHTML = ``;
  Elements.alert_year.innerHTML = ``;
  let dataToNumber = StringToNumber({
    str1: data_day,
    str2: data_month,
    str3: data_year,
  });
  if (data_day === "" || data_month === "" || data_year === "") {
    return Errors("empity");
  }
  if (!dataToNumber) {
    return Errors("number");
  }
  if (data_day > 31 || data_month > 12 || data_year > currentYear) {
    return Errors("invalid");
  }
  if (data_day < 0 || data_month < 0 || data_year < 0) {
    return Errors("invalid");
  }
  if (!isNumberGreaterThanCurrentMonth(data_day, date, currentYear)) {
    return Errors("whole");
  }
  // Clear styles in case there is no error
  StyleError(false);
  intervals = NumberAnimation();
  // Timer before the animation end
  setTimeout(() => {
    clearInterval(intervals);
    intervals = null;
    Calculate({ year: data_year, month: data_month, day: data_day });
  }, 1000);
}

btn.addEventListener("click", () => {
  Main();
});
