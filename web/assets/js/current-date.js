// Copyright (c) 2022 Bondo Pangaji
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const spanDate = document.getElementById("date")
const spanMonth = document.getElementById("month")
const spanYear = document.getElementById("year")
const spanWeekday = document.getElementById("weekday")

function loadCurrentDate() {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" })
  const myDate = date.getDate();
  const year = date.getFullYear();
  const day = date.toLocaleDateString("default", { weekday: "long" })

  spanDate.innerText = myDate
  spanMonth.innerText = month
  spanYear.innerText = year
  spanWeekday.innerText = day
}