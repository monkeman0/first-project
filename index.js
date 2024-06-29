var textsize = 20
var textsay = "px"
document.getElementById("ohio").onclick = function(){
textsize = textsize*0.98
textsay = textsize+"px"
document.getElementById("ohio").style.backgroundSize = textsay;
}