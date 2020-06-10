const bookedDays = [
  {
    bookedDay: 10,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 11,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 12,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 13,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 14,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 22,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 23,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 24,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 25,
    bookedMonth: 5,
    bookedYear: 2020,
  },
  {
    bookedDay: 26,
    bookedMonth: 5,
    bookedYear: 2020,
  },
];

function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();

/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute("data-lang");

var months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
var days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

var dayHeader = "<tr>";
for (day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";

document.getElementById("thead-month").innerHTML = dayHeader;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  var firstDay = new Date(year, month).getDay();

  tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;

  // creating all cells
  var date = 1;
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month_name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span>";

        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.className = "date-picker selected";
        }

        for (let i = 0; i < bookedDays.length; i++) {
          if (
            date === bookedDays[i].bookedDay &&
            year === bookedDays[i].bookedYear &&
            month === bookedDays[i].bookedMonth
          ) {
            cell.className = "date-picker booked";
          }
        }

        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row);
  }
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
