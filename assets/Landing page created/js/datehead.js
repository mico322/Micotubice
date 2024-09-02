function datehax() {
    var mydate = new Date()
    mydate.setDate(mydate.getDate());
    var year = mydate.getYear()
    if (year < 1000)
        year += 1900
    var day = mydate.getDay()
    var month = mydate.getMonth()
    var daym = mydate.getDate()
    if (daym < 10)
        daym = "0" + daym
    var dayarray = Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
     var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    
    //var dayarray = Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    //var montharray = new Array("janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre");
    
    // var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
    // var montharray = new Array("Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December")
    return "" + montharray[month] + " " + daym + ", " + year + "";
}

function datehay() {
    var mydate = new Date()
    mydate.setDate(mydate.getDate());
    var year = mydate.getYear()
    if (year < 1000)
        year += 1900
    return year;
}