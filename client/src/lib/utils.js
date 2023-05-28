import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { byAlpha2 } from "iso-country-codes";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getCountryCode(countryName) {
  if (countryName.length === 2) {
    return Object.values(byAlpha2).find(
      (country) => country.alpha2 === countryName
    ).alpha2;
  }
  return Object.values(byAlpha2).find((country) =>
    country.name.toLowerCase().includes(countryName.toLowerCase())
  ).alpha2;
}

export function timeAgo(timestamp, locale = "en") {
  let value;
  const diff = (new Date().getTime() - timestamp.getTime()) / 1000;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (years > 0) {
    value = rtf.format(0 - years, "year");
  } else if (months > 0) {
    value = rtf.format(0 - months, "month");
  } else if (days > 0) {
    value = rtf.format(0 - days, "day");
  } else if (hours > 0) {
    value = rtf.format(0 - hours, "hour");
  } else if (minutes > 0) {
    value = rtf.format(0 - minutes, "minute");
  } else {
    value = rtf.format(0 - diff, "second");
  }
  return value;
}
