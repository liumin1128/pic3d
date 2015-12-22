var imgsObj = function(){
	this.x = [],
	this.y = [],
	this.z = [],
	this.w = [],
	this.h = [],
	this.s = [],
	this.rx = [],
	this.ry = [],
	this.rz = [],
	this.num = 24,
	this.init = function(){
		for(var i=0;i<imgs.num;i++){
			this.x[i] = 0;
			this.y[i] = 0;
			this.z[i] = 0;
			this.w[i] = 0;
			this.h[i] = 0;
			this.rx[i] = 0;
			this.ry[i] = 0;
			this.rz[i] = 0;
			this.s[i] = 1;
			var img = document.createElement("img");
			img.setAttribute("id", ""+i); 
			img.setAttribute("class", "init"); 
			img.setAttribute("onmousedown", "$(this,event)"); 
			img.setAttribute("onmouseover", "goTop(this)"); 
			img.setAttribute("ondblclick", "showBig(this)"); 
			img.setAttribute("src", "img/"+i+".jpg"); 
			document.getElementById("container").appendChild(img);
		}
	},
	this.restore = function(){
		for(var i=0;i<imgs.num;i++){
			var obj = document.getElementById(''+i);
			obj.style.zIndex = 1;
			obj.style.transitionDelay ="0s";
			imgs.rx[i] = 0;
			imgs.ry[i] = 0;
			imgs.rz[i] = 0;
			imgs.s[i] = 1;
		}
	},
	this.restoreOne = function(ss){
		var obj = document.getElementById(''+ss);
			imgs.rx[ss] = 0;
			imgs.ry[ss] = 0;
			imgs.rz[ss] = 0;
	},
	this.change = function(){
		for(var i=0;i<imgs.num;i++){
			var obj = document.getElementById(''+i);
			obj.style.transform ="translate3d("+imgs.x[i]+"px,"+imgs.y[i]+"px,"+imgs.z[i]+"px) rotateX("+imgs.rx[i]+"deg) rotateY("+imgs.ry[i]+"deg) rotateZ("+imgs.rz[i]+"deg) scale("+imgs.s[i]+")";
		}
	},
	this.changeOne = function(ss){
  		var obj = document.getElementById(''+ss);
		obj.style.transform ="translate3d("+imgs.x[ss]+"px,"+imgs.y[ss]+"px,"+imgs.z[ss]+"px) rotateX("+imgs.rx[ss]+"deg) rotateY("+imgs.ry[ss]+"deg) rotateZ("+imgs.rz[ss]+"deg) scale("+imgs.s[ss]+")";

	},
	this.tile = function(){
		for(var i=0;i<imgs.num;i++){
			imgs.w[i] = 200;
			imgs.h[i] = 150;
			imgs.x[i] = imgs.w[i]*(i%6);
			imgs.y[i] = imgs.h[i]*Math.floor(i/6);
			imgs.z[i] = 0;
		}
	},
	this.random = function(){
		for(var i=0;i<imgs.num;i++){
 			imgs.x[i] = 1000*Math.random();
			imgs.y[i] = 500*Math.random();
		}
	},
	this.rotate = function(){
		for(var i=0;i<imgs.num;i++){
			imgs.rx[i] = (Math.random()-0.5)*90;
			imgs.ry[i] = (Math.random()-0.5)*90;
			imgs.rz[i] = (Math.random()-0.5)*90;
		}
	},
	this.rotateX = function(){
		for(var i=0;i<imgs.num;i++){
			imgs.rx[i] = (Math.random()-0.5)*90;
		}
	},
	this.rotateY = function(){
		for(var i=0;i<imgs.num;i++){
			imgs.ry[i] = (Math.random()-0.5)*90;
		}
	},
	this.rotateZ = function(){
		for(var i=0;i<imgs.num;i++){
			imgs.rz[i] = (Math.random()-0.5)*90;
		}
	}
}
