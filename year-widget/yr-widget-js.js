function updateProgressBar() {
    var currentDate = new Date();
    var currentDayOfYear = getDayOfYear(currentDate);
    var totalDaysInYear = getTotalDaysInYear(currentDate.getFullYear());
    var percentage = Math.round((currentDayOfYear / totalDaysInYear) * 100);

    document.getElementById("progress-bar").style.width = percentage + "%";
    document.getElementById("progress-bar").innerHTML = percentage + "%";
}

function getDayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getTotalDaysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

updateProgressBar();
setInterval(updateProgressBar, 60000);
