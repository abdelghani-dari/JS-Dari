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

document.getElementById('ae').addEventListener('click',addmee)
function addmee(){
    var para = document.createElement('p')
    document.getElementById('ae').insertAdjacentElement('beforebegin',para)
    var araa = document.getElementById('ar1')
    var spansa = araa.querySelectorAll('p')
    for(var h=0;h<spansa.length;h++){
        spansa[h].onclick = function(){
            if(this.style.outlineColor=='yellow'){
                this.style.outlineColor = 'white'
                this.style.outlineWidth = "2px"}
            else {
                for(j=0;j<spansa.length;j++){
                    spansa[j].style.outlineColor = 'white'
                    spansa[j].style.outlineWidth = "2px"
                }
                    this.style.outlineColor = 'yellow'
                this.style.outlineWidth = "3px"}
        } 
    }
//  on clicking on all 
    document.getElementById('applying').onclick = function(){
        for(var w=0;w<spansa.length;w++){
            if(spansa[w].style.outlineColor=='yellow'){
                var bg = document.getElementById('elcolor')
                spansa[w].style.background = bg.value 
            var wth = document.getElementById('width')
            spansa[w].style.width =(wth.value)+"px"
            var hgh = document.getElementById('height')
            spansa[w].style.height = (hgh.value)+"px"
            var borderEp = document.getElementById('borderEp')
            var borderSt = document.getElementById('borderSt')
            var borderCl = document.getElementById('borderCl')
            spansa[w].style.borderColor = borderCl.value
            spansa[w].style.borderWidth = parseInt(borderEp.value) + "px"
            spansa[w].style.borderStyle = borderSt.value
            var radiustop = document.getElementById('radiustop')
            var radiusright = document.getElementById('radiusright')
            var radiusbottom = document.getElementById('radiusbottom')
            var radiusleft = document.getElementById('radiusleft')
            spansa[w].style.borderRadius = parseInt(radiustop.value)+"px "+parseInt(radiusright.value)+"px "+parseInt(radiusbottom.value)+"px "+parseInt(radiusleft.value)+"px"
            var ptop = document.getElementById('ptop')
            var pright = document.getElementById('pright')
            var pbottom = document.getElementById('pbottom')
            var pleft = document.getElementById('pleft')
            spansa[w].style.paddingTop = parseInt(ptop.value) + "px"
            spansa[w].style.paddingRight = parseInt(pright.value) + "px"
            spansa[w].style.paddingBottom = parseInt(pbottom.value) + "px"
            spansa[w].style.paddingLeft = parseInt(pleft.value) + "px"
            var ta = document.getElementById('ta')
            spansa[w].innerHTML = (ta.value)
            var cclr = document.getElementById('cclr')
            spansa[w].style.color = (cclr.value)
            var cursorr = document.getElementById('cursor')
            spansa[w].style.cursor = (cursorr.value)
            var rotate = document.getElementById('rotate')
            spansa[w].style.transform = "rotate("+rotate.value+"deg)"
            var ccc = document.getElementById('circl')
            if(ccc.checked==true){
                spansa[w].style.borderRadius = "50%"}
            spansa[w].style.boxShadow = 'none'
            // spansa[w].style.outline = 'none'
            }} 
        }
    }
function fs(){
    document.documentElement.requestFullscreen()
}
function nn(){
    document.exitFullscreen()
}
var i=6
//////////////////// background change
function previouss(){
    i-=1
    if(i<1){i=1}
    document.body.style.background = "url('images/image\ \("+i+"\).jpg')"
    document.getElementById('ae').style.background = "url('images/image\ \("+i+"\).jpg')"
    document.getElementById('ae').style.webkitBackgroundClip = "text"
    document.getElementById('ae').style.backgroundClip = "text"
}
function nextt(){
    i+=1
    if(i>22){i=22}
    document.body.style.background = "url('images/image\ \("+i+"\).jpg')"
    document.getElementById('ae').style.background = "url('images/image\ \("+i+"\).jpg')"
    document.getElementById('ae').style.webkitBackgroundClip = "text"
    document.getElementById('ae').style.backgroundClip = "text"
}
////////////////////////////////////////
var ar = document.getElementById('ar1')
var spans = ar.querySelectorAll('p')
for(var b=0;b<=40;b++){
    var op = document.createElement('option')
    op.value = b
    op.innerText = b+"px"
    document.getElementById('borderEp').appendChild(op)
}
var borderstyle = ["solid","dotted","dashed","groove"]
for(var bs=0;bs<borderstyle.length;bs++){
    var ops = document.createElement('option')
    ops.value = borderstyle[bs]
    ops.innerHTML = borderstyle[bs]
    document.getElementById('borderSt').appendChild(ops)
}
var cursor = ["pointer","cell","crosshair","grab","move","not-allowed","wait"]
for(var bs=0;bs<cursor.length;bs++){
    var ops = document.createElement('option')
    ops.value = cursor[bs]
    ops.innerHTML = cursor[bs]
    document.getElementById('cursor').appendChild(ops)
}
var bordercolor = ["black","white","red","green","yellow","blue","aqua","orange","coral","violet","brown","crimson","green"]
for(var bc=0;bc<bordercolor.length;bc++){
    var opc = document.createElement('option')
    opc.value = bordercolor[bc]
    opc.innerHTML = bordercolor[bc]
    document.getElementById('borderCl').appendChild(opc)
}
for(var pd=0;pd<=100;pd++){
    var opp = document.createElement('option')
    opp.value = pd
    opp.innerHTML = pd+"px"
    document.getElementById('ptop').appendChild(opp)
    var opp2 = opp.cloneNode(true)
    document.getElementById('pright').appendChild(opp2)
    var opp3 = opp.cloneNode(true)
    document.getElementById('pbottom').appendChild(opp3)
    var opp4 = opp.cloneNode(true)
    document.getElementById('pleft').appendChild(opp4)}
for(var pd=0;pd<=200;pd++){
    var opp = document.createElement('option')
    opp.value = pd
    opp.innerHTML = pd+"px"
    document.getElementById('radiustop').appendChild(opp)
    var opp2 = opp.cloneNode(true)
    document.getElementById('radiusright').appendChild(opp2)
    var opp3 = opp.cloneNode(true)
    document.getElementById('radiusbottom').appendChild(opp3)
    var opp4 = opp.cloneNode(true)
    document.getElementById('radiusleft').appendChild(opp4)}
var ara = document.getElementById('ar1')
var spp = document.querySelectorAll('p')



