var wage = chrome.storage.local.get({wage: -1}, function(items) {
    var wage = items.wage;
    var weekHoursLbl = $("#time-entered p:first-child")[0];
    var weekHours = parseFloat(weekHoursLbl.innerHTML.split(": ")[1].split(" hours")[0]);

    if (wage == -1) {
        $("#time-entered").append('<div id="week-earnings">Please set your wage in the Tick Multiplier options.</div>');
    } else {
        var earnings = weekHours * wage;
        $("#time-entered").append('<div id="week-earnings">Money earned this week: $' + earnings + '</div>');
    }
});