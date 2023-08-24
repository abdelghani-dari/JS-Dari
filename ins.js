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

var allUsers = [
    {"abdel_ghani":"Abdo2001"},
    {"oussama.asli":"ousSama875"},
    {"sami45":"samii22"},
    {"youness_darii":"YnS888"},
    {"yassin1999":"YassinYassin9"},
]
var userList = document.getElementById('myusers')
for(var j = 0 ; j<allUsers.length ; j++){
    var tr  = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    for(d in allUsers[j]){
        td1.innerHTML = d
        td2.innerHTML = allUsers[j][d]
    }
    td1.classList.add('bg-dark')
    td2.classList.add('bg-dark')
    tr.appendChild(td1)
    tr.appendChild(td2)
    userList.appendChild(tr)
}

var user = document.getElementById('usr')
var pwd = document.getElementById('pwd')
var msg = document.getElementById('message1')
document.getElementById('valider').onclick = function(){
ch = false
    for(var n=0;n<allUsers.length;n++){
            var obj = allUsers[n]
            for(var h in obj){
                if(  ((user.value).trim()==h) && ((pwd.value)==obj[h]) ){
                    // msg.innerHTML = "valid" 
                    msg.innerHTML ="<div id='inv'>vous avez connecté avec success</div>"
                    document.getElementById('inv').classList.add("valid")
                    ch =true 
                    break
                }
            }
        }
        if(ch==false){
                msg.innerHTML ="<div id='inv'>Il n'y a aucun compte de cette information</div>"
                document.getElementById('inv').classList.add("invalid")
            }

}

function ajouter(){
    var tab = document.getElementById('myusers')
var username = document.getElementById('username')
var password = document.getElementById("passw")
var tr = document.createElement('tr')
var td1 = document.createElement('td')
var td2 = document.createElement('td')
td1.innerHTML = username.value
td2.innerHTML = password.value
td1.classList.add('bg-primary')
td2.classList.add('bg-primary')
tr.appendChild(td1)
tr.appendChild(td2)
tab.appendChild(tr)
}





















