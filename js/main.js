var imgs = new imgsObj();
var ctr = document.getElementById('container');	
var isDown = false;
var divMove;
var topZindex = 200; 
var divId ;
document.onmousemove = function(e){
		e.preventDefault();
		if(isDown){
		// divMove.style.left=(e.clientX-b)+"px";
  		//divMove.style.top=(e.clientY-c)+"px";
  		imgs.x[divId]=e.clientX-b;
  		imgs.y[divId]=e.clientY-c;
  		imgs.changeOne(divId);
		}
}
function $(o, e) {
    divMove=o;
    divId = divMove.getAttribute("id");
    isDown=true;
	divMove.style.transition = "0s";
    document.all?divMove.setCapture():window.captureEvents(Event.MOUSEMOVE);
    b=e.clientX-imgs.x[divId];
    c=e.clientY-imgs.y[divId];
}
document.ondragstart=function() {return false;}//用于火狐禁用图片拖拽
document.onmouseup = function(){
	isDown = false;
	divMove.style.transition = "0.3s";
}
window.onload = function(){
	imgs.init();
	imgs.tile();
	imgs.change();
	// divMove = document.getElementById("0");

}
function random(){
	imgs.restore();
	imgs.rotateZ();
	imgs.random();
	imgs.change();
}
function tile(){
	imgs.restore();
	imgs.tile();
	imgs.change();
}
function focus0(){
	imgs.restore();

	for(var i=0;i<imgs.num;i++){
		var obj = document.getElementById(""+i);
		obj.style.zIndex = topZindex;
		obj.style.transitionDelay =(imgs.num-i)*0.05+"s";
		topZindex-=1;
		imgs.w[i] = 200;
		imgs.h[i] = 150;
		imgs.x[i] = 500+i*0;
		imgs.y[i] = 450-i*0;
	}
	imgs.change();
}
function deal(){
	imgs.restore();

	for(var i=0;i<imgs.num;i++){
		var obj = document.getElementById(""+i);
		obj.style.transitionDelay =i*0.05+"s";
	}
	imgs.tile();
	imgs.change();
}
function sector(){
	imgs.restore();

	for(var i=0;i<imgs.num;i++){
		var obj = document.getElementById(""+i);
		obj.style.zIndex = topZindex;
		obj.style.transitionDelay =(imgs.num-i)*0.05+"s";
		topZindex-=1;
		imgs.w[i] = 200;
		imgs.h[i] = 150;
		imgs.x[i] = 500+(i-12)*20;
		imgs.y[i] = 450+Math.abs(i-12)*5;
		imgs.rx[i] = 0;
		imgs.ry[i] = 0;
		imgs.rz[i] = (i-12)/12*45;
	}
	imgs.change();
}
function line(){
	imgs.restore();

	for(var i=0;i<imgs.num;i++){
		var obj = document.getElementById(""+i);
		obj.style.zIndex = topZindex;
		obj.style.transitionDelay =(imgs.num-i)*0.05+"s";
		topZindex-=1;
		imgs.w[i] = 200;
		imgs.h[i] = 150;
		imgs.x[i] = 500+(i-12)*20;
		imgs.y[i] = 250;
		imgs.rx[i] = 0;
		imgs.ry[i] = 0;
		imgs.rz[i] = 0;
	}
	imgs.change();
}
function line2(){
	imgs.restore();
	for(var i=0;i<imgs.num;i++){
		var obj = document.getElementById(""+i);
		obj.style.zIndex = topZindex;
		obj.style.transitionDelay =(imgs.num-i)*0.05+"s";
		topZindex-=1;
		imgs.w[i] = 200;
		imgs.h[i] = 150;
		imgs.x[i] = 500+(i-12)*20;
		imgs.y[i] = 250;
		imgs.rx[i] = 0;
		imgs.ry[i] = 0;
		imgs.rz[i] = 0;
	}
	imgs.change();
}
function rotateX(){
	imgs.rotateX();
	imgs.change();
}
function rotateY(){
	imgs.rotateY();
	imgs.change();
}
function rotateZ(){
	imgs.rotateZ();
	imgs.change();
}
function restore(){
	imgs.restore();
	imgs.change();
}
function checkL(i){
	for(var j=0;j<i;j++){
		var l = calLength2(imgs.x[j],imgs.y[j],imgs.x[i],imgs.y[i]);
		if(l<30000){
			imgs.x[i] = 1000*Math.random();
			imgs.y[i] = 500*Math.random();
			checkL(i);
		}
		return;
	}
}
function calLength2(x1, y1, x2, y2) {
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}
function goTop(obj){
	obj.style.zIndex = topZindex;
	topZindex+=1;
}
function showBig(obj){
    divId = obj.getAttribute("id");
    if(imgs.s[divId] == 5){
    	imgs.s[divId] = 1;
    	imgs.restoreOne(divId);
    	imgs.changeOne(divId);
    }else{
    	imgs.s[divId] = 5;
    	imgs.restoreOne(divId);
    	imgs.changeOne(divId);
    }
}
