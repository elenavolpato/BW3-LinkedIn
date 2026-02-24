export const monthsNames = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
]

export const monthAndYear = (date) => {
  const month = new Date(date).getMonth()
  const year = new Date(date).getFullYear()
  return `${monthsNames[month]} ${year}`
}

export const capitalizeFirstLetter = (exp) => {
  return (
    String(exp).charAt(0).toUpperCase() + String(exp).slice(1).toLowerCase()
  )
}
