var playControler = document.querySelector('.home__play'); 
var video = document.querySelector('.home__video');
var overlay = document.querySelector('.overlay');


playControler.addEventListener('click', function(event){
	this.style.opacity = '0';
	// video.style.display = 'block';
	// overlay.style.display = 'block';
	video.style.opacity = 1;
	overlay.style.opacity = '0.4';
});

document.onkeydown = function(e){
	console.log(e.keyCode);
}

// jQuery(function(){
   
//   $(".my-foto").imagezoomsl({
	  
//       innerzoommagnifier: true,
//       classmagnifier: window.external ? window.navigator.vendor === "Yandex" ? "" : "round-loupe" : "",
//       magnifierborder: "5px solid #F0F0F0",                               // fix для Opera, Safary, Yandex		  
//       zoomrange: [2, 8],
//       zoomstart: 4,
//       magnifiersize: [150, 150]		
//   });
// });   