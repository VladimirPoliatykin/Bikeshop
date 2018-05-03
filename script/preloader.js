var
	preloader 		= document.querySelector('.preloader'),
	loader    		= document.querySelector('.loader'),
	totalPercent 	= document.querySelector('#percent'),
	images 			= document.images,
	imagesCount 	= images.length,
	imagesLoadedCount = 0,
	videoLoadedCount  = 0,
	totalLoadedCount = imagesLoadedCount + videoLoadedCount;
	videos = document.querySelectorAll('video'),
	videoLength = videos.length;
	totalCount = imagesCount + videoLength;

function Video(src, append) {
  var v = document.createElement("video");
  if (src != "") {
    v.src = src;
  }
  if (append == true) {
    document.body.appendChild(v);
  }
  return v;
}


document.documentElement.style.overflow = 'hidden';

document.body.onscroll = function(event){
	return false;
}

	for(var i = 0; i < imagesCount; i++){
		var imageClone = new Image();
		imageClone.onload = mediaLoaded;
		imageClone.onerror = mediaLoaded;
		imageClone.src = images[i].src;
		
	}

	for(var i = 0; i < videoLength; i++){
		var videoClone = new Video();
		console.log(videoClone);
		videoClone.onload = mediaLoaded;
		videoClone.onerror = mediaLoaded;
		videoClone.src = videos[i].href;
		
		
	}

	function mediaLoaded(){
		// imagesLoadedCount++;
		// videoLoadedCount++;
		totalLoadedCount++;
		totalPercent.innerHTML = (((100/totalCount) * totalLoadedCount) << 0) + '%';
		// console.log(totalLoadedCount);

		if(totalLoadedCount >= totalCount) loaded();
	}
	




function loaded(){
	document.body.onload = function(event){

	// alert();
	setTimeout(function(){
		if(!preloader.classList.contains('loaded')){
			preloader.classList.add('loaded');
		}
		document.documentElement.style.overflow = '';
	},1200);

	};
};

// console.log(totalLoadedCount)