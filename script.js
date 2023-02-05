var wd = screen.width ;
document.body.style.width = wd + "px";

var r=0;
for(let i=1 ; i<=12 ; ++i){
	document.querySelector(".mark"+i).style.transform = 
	`rotate(${r}deg) translateY(90px)`;
	r+=30;
}

var h,m,s,time;

var hour = document.querySelector("#hour");
var second = document.querySelector("#second");
var minute = document.querySelector("#minute");

setInterval(()=>{
	time = new Date();
	h = time.getHours();
	m = time.getMinutes();
	s = time.getSeconds();
	s2= time.getMilliseconds();

	second.style.rotate = `${s*6 + (s2*6)/1000}deg`;
	minute.style.rotate = `${m*6 + (s*6)/60}deg`;
	hour.style.rotate = `${h*30 + (m*6)/60}deg`;
},1)
