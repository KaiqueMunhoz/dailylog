function weekDay(day, month, year){

    var date = new Date(year,month-1,day);
    var day = date.getDay();
    console.log(daysOfWeek(day));
}

function daysOfWeek(day) {
        
    var daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return daysOfWeek[day];
}