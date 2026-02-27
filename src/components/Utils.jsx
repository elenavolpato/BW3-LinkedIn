export const monthsNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

export const monthAndYear = (date) => {
  const d = new Date(date);
  const month = d.getUTCMonth();
  const year = d.getUTCFullYear();
  return `${monthsNames[month] ? monthsNames[month].slice(0, 3) : ""} ${year}`;
};

export const capitalizeFirstLetter = (exp) => {
  return (
    String(exp).charAt(0).toUpperCase() + String(exp).slice(1).toLowerCase()
  );
};

export const getMonthNumber = (month) => {
  console.log(month);
  console.log(monthsNames.findIndex((m) => m === month));
  return monthsNames.findIndex((m) => m === month);
};
