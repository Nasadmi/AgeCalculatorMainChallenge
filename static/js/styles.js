import { Elements } from "./vars.js";

/**
 * @description Function in charge of activating the styles in case there is an error
 * @param {boolean} boolean Boolean to jump or not errors (true: yes, false: no)
 */

function StyleError(boolean) {
  if (boolean) {
    Elements.input_day.classList.add("error");
    Elements.input_month.classList.add("error");
    Elements.input_year.classList.add("error");
    Elements.label_day_title.classList.add("error");
    Elements.label_mont_title.classList.add("error");
    Elements.label_year_title.classList.add("error");
  } else {
    Elements.input_day.classList.remove("error");
    Elements.input_month.classList.remove("error");
    Elements.input_year.classList.remove("error");
    Elements.label_day_title.classList.remove("error");
    Elements.label_mont_title.classList.remove("error");
    Elements.label_year_title.classList.remove("error");
  }
}

let intervals;

/**
 * @description Function in charge of the effect of multiple numbers before giving the customer's age, small visual effect, storing the Math.random() value in arrays and making an interval of 80 milliseconds
 * @returns Returns an interval so that it can then be negated in the Main() function of main.js
 */

function NumberAnimation() {
  let arr_year = [];
  let arr_month = [];
  let arr_day = [];
  for (let i = 0; i < 10; i++) {
    arr_year.push(Math.floor(Math.random() * (100 - 0 + 1) + 0));
    if (i > 8) {
      continue;
    }
  }
  for (let i = 0; i < 10; i++) {
    arr_month.push(Math.floor(Math.random() * (12 - 1 + 1) + 0));
    if (i > 8) {
      continue;
    }
  }
  for (let i = 0; i < 10; i++) {
    arr_day.push(Math.floor(Math.random() * (31 - 1 + 1) + 0));
    if (i > 8) {
      continue;
    }
  }
  if (!intervals) {
    return setInterval(() => {
      Elements.span_day.innerHTML = `${
        arr_day[Math.floor(Math.random() * arr_day.length)]
      }`;
      Elements.span_month.innerHTML = `${
        arr_month[Math.floor(Math.random() * arr_month.length)]
      }`;
      Elements.span_year.innerHTML = `${
        arr_year[Math.floor(Math.random() * arr_year.length)]
      }`;
    }, 80);
  }
}

export { StyleError, NumberAnimation };
