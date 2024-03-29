const btn = document.getElementById("btn-svg-icon");

let interval;

function Main() {
  let data_day = Elements.input_day.value;
  let data_month = Elements.input_month.value;
  let data_year = Elements.input_year.value;
  let date_client = new Date(data_year, data_month, data_day);
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
  if (date_client.getFullYear() === currentYear && ((data_day > currentDay || data_month > currentMonth) || (data_day > currentDay && data_month > currentMonth))) {
    return Errors("future");
  }
  
  if (!isNumberGreaterThanCurrentMonth(data_day, date, currentYear)) {
    return Errors("whole");
  }
  // Clear styles in case there is no error
  StyleError(false);
  interval = NumberAnimation();
  // Timer before the animation end
  setTimeout(() => {
    clearInterval(interval);
    interval = null;
    Calculate({ year: data_year, month: data_month, day: data_day });
  }, 1000);
}

btn.addEventListener("click", () => {
  Main();
});
