export const monthsNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giulio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

export const monthAndYear = (date) => {
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  return `${monthsNames[month].slice(0, 2)} ${year}`;
};

export const capitalizeFirstLetter = (exp) => {
  return (
    String(exp).charAt(0).toUpperCase() + String(exp).slice(1).toLowerCase()
  );
};

export const getMonthNumber = (month) => {
  console.log(month);
  return monthsNames.findIndex((m) => m === month);
};
