setInterval(timing,50)
function timing(){
var h = document.getElementById('hours')
var m = document.getElementById('minutes')
var s = document.getElementById('seconds')
var Y = document.getElementById('year')
var M = document.getElementById('month')
var D = document.getElementById('day')
var D2 = document.getElementById('day2')
var d = new Date()
var day = ""
switch(d.getDay()){
    case 0:
        day = "Sunday"
        break
    case 1:
        day = "Monday"
        break
    case 2:
        day = "Tuesday"
        break
    case 3:
        day = "Wednesday"
        break
    case 4:
        day = "Thursday"
        break
    case 5:
        day = "Friday"
        break
    case 6:
        day = "Saturday"
        break }
        var hours = d.getHours()
        if(d.getHours()<10){hours ="0"+ (d.getHours())}
        var minutes = d.getMinutes()
        if(d.getMinutes()<10){minutes ="0"+ d.getMinutes()}
        var seconds = d.getSeconds()
        if(d.getSeconds()<10){seconds ="0"+ d.getSeconds()}

        h.innerHTML = hours
        m.innerHTML = minutes
        s.innerHTML = seconds
        Y.innerHTML = d.getFullYear()
        M.innerHTML = d.getMonth()
        D.innerHTML = day 
        D2.innerHTML =d.getDate()
}

// 