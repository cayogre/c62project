var touchEvent = "empaty"
var last_position_of_x, last_position_of_y;
var width_of_line = 1
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d"); 
color="blue";
canvas.addEventListener("touchstart",myTouchstart);
function myTouchStart(e){
    touchEvent = "Touchstart"
    last_position_of_x= e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y= e.touches[0].clientY - canvas.offsetTop
}
canvas.addEventListener("tougthmove",myTougthMove);
function myToucMove(e){
    var atual_posicao_do_touch_x = e.touches[0].clientX - canvas.offsetLeft
    var atual_posicao_do_touch_y = e.touches[0].clientY - canvas.offsetTop
    if (touchEvent == "Touchstart"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth = width_of_line
    ctx.moveTo(last_position_of_x, last_position_of_y)
    ctx.lineTo(atual_posicao_do_mouse_x, atual_posicao_do_mouse_y)
    ctx.stroke()
    }
    last_position_of_x = atual_posicao_do_touch_x;
    last_position_of_y = atual_posicao_do_touch_y;
}