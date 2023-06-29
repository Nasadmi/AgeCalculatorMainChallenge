// Select HTML Elements

const Elements = {
  input_day: document.getElementById("day"),
  input_month: document.getElementById("month"),
  input_year: document.getElementById("year"),
  span_year: document.getElementById("year-response"),
  span_month: document.getElementById("month-response"),
  span_day: document.getElementById("day-response"),
  alert_day: document.getElementById("alert-day"),
  alert_month: document.getElementById("alert-month"),
  alert_year: document.getElementById("alert-year"),
  label_mont_title: document.getElementById("month-label-title"),
  label_day_title: document.getElementById("day-label-title"),
  label_year_title: document.getElementById("year-label-title"),
};

// Commun Erros

const errors = {
  empity: "This field is required",
  invalid: "Must be valid",
  whole: "Must be valid date",
  number: "You can only enter numbers",
  future: "Not yet born",
};

// Date constants

const date = new Date();

const currentDay = date.getDate();

const currentMonth = date.getMonth() + 1;

const currentYear = date.getFullYear();

export { Elements, errors, currentDay, date, currentMonth, currentYear };
