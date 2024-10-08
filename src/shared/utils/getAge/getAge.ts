import { plural } from "@/shared/utils";

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();

  let m = today.getMonth() - birthDate.getMonth();
  let d = today.getDay() - birthDate.getDay();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age === 0) {
    m = 12 + m;
    if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
      m--;
    }
  }

  return (
    birthDate.getDate() +
    " " +
    months[birthDate.getMonth()] +
    ", будет " +
    (age + 1) +
    " " +
    plural(age + 1, ["год", "года", "лет"]) +
    "."
  );
}
