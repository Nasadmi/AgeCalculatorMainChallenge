/**
 * @description Transforms the parameter text into numbers and also checks if it can be passed to prevent NaN errors
 * @param {string} str1 Text
 * @param {string} str2 Text
 * @param {string} str3 Text
 * @returns Depending on the result, it returns the parameters as a number or returns a false value. (INVALID DATA ERROR)
 */

function StringToNumber({ str1, str2, str3 }) {
  let numb_one = !isNaN(str1);
  let numb_two = !isNaN(str2);
  let numb_three = !isNaN(str3);
  if (numb_one && numb_two && numb_three) {
    return {
      numb_one: Number(str1),
      numb_two: Number(str2),
      numb_three: Number(str3),
    };
  } else {
    return false;
  }
}

/**
 * @description Check if the client has a certain age or has not reached the age by checking if the passed parameters are greater than the current date
 * @param {number} month Client Month
 * @param {number} day Client Day
 * @returns True or false values depending on the result
 */

function DateHigherThanCurrent(month, day) {
  if (month > currentMonth || day > currentDay) {
    return true;
  } else {
    return false;
  }
}

/**
 * @description In charge of making the calculations to get the age of the client, specifically the main function
 * @param {number} year Client Year
 * @param {number} month Client Month
 * @param {number} day Client Day
 */

function Calculate({ year, month, day }) {
  let calc_month = currentMonth - month;
  let calc_year = currentYear - year;
  let calc_day = currentDay - day;
  if (DateHigherThanCurrent(month, day)) {
    calc_year = currentYear - year - 1;
    calc_month = calc_month + 12;
  }
  if (Math.sign(calc_month) === -1) {
    calc_month = -(currentMonth - month);
  }
  if (Math.sign(calc_day) === -1) {
    calc_day = -(currentDay - day);
  }
  if (Math.sign(calc_year) === -1) {
    calc_year = 0;
  }
  Elements.span_day.innerHTML = `${calc_day}`;
  Elements.span_month.innerHTML = `${calc_month}`;
  Elements.span_year.innerHTML = `${calc_year}`;
}
