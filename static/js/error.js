/**
 * @description Function in charge of executing code in case of error through the type that is passed to it
 * @param {string} type Error types defined in the errors library of vars.js
 * @returns It does not return anything to stop the flow of the code in case of error
 */

function Errors(type) {
  if (type === "empity") {
    Elements.alert_day.innerHTML = `${errors.empity}`;
    Elements.alert_month.innerHTML = `${errors.empity}`;
    Elements.alert_year.innerHTML = `${errors.empity}`;
    StyleError(true);
    return;
  }

  if (type === "invalid") {
    Elements.alert_day.innerHTML = `${errors.invalid} day`;
    Elements.alert_month.innerHTML = `${errors.invalid} month`;
    Elements.alert_year.innerHTML = `${errors.invalid} in past`;
    StyleError(true);
    return;
  }

  if (type === "whole") {
    Elements.alert_day.innerHTML = `${errors.whole}`;
    StyleError(true);
    return;
  }

  if (type === "number") {
    Elements.alert_day.innerHTML = `${errors.number}`;
    Elements.alert_month.innerHTML = `${errors.number}`;
    Elements.alert_year.innerHTML = `${errors.number}`;
    StyleError(true);
    return;
  }

  if (type === "future") {
    Elements.alert_day.innerHTML = `${errors.future}`;
    StyleError(true);
    return;
  }
}

/**
 * @description Collects how many days the specified month has and checks that the number (day) is not greater than the day of the specified month (ERR WHOLE FORM)
 * @param {number} number Days
 * @returns Returns true or false depending on the condition set.
 */

function isNumberGreaterThanCurrentMonth(number) {
  let maxDate = new Date(currentYear, date.getMonth() + 1, 0).getDate();
  if (number > maxDate) {
    return false;
  } else {
    return true;
  }
}