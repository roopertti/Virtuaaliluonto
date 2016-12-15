//Tässä alustetaan player
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

//Pääsivun asettava funktio
function loadMainScreen() {
  $('#ukkokoli-container').removeClass('hidden');
  $('#quiz-container').addClass('hidden');
  $('#adventure-container').addClass('hidden');
  if (user.adventurePlayed === true && user.quizAlerted === false) {
  	$('#quiz-alert').modal('show');
  	user.quizAlerted = true;
  }
}

//Playerin toiminnot
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '550',
		width: '1080',
		videoId: 'KhFFIFeZBqg',
		playerVars: {
			controls: 0,
			disablekb: 1,
			fs: 0,
			showinfo: 0,
			modestbranding: 1,
			rel: 0
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': function(e) {
				if(e.data === YT.PlayerState.ENDED) {
					player.playVideo();
				}
			},
			'onPlaybackQualityChange': function() {
				var q = player.getPlaybackQuality()
				player.setPlaybackQuality(q);
			}
		}
	});
}

//Vaihtaa videon playeriin
function changeVideo(video){      
	player.loadVideoById(video, 0);
}
//Toiminnot playerin valmistuessa
function onPlayerReady(event) {
	player.setVolume(0);
	player.setPlaybackQuality('hd720');
	event.target.playVideo();
}

//Videon pysäytys
function stopVideo() {
	player.stopVideo();
}

//Videon ääni päälle
function unmutePlayer() {
	player.setVolume(20);
	$('#mute').removeClass('hidden');
	$('#unmute').addClass('hidden');
}

//Laadun vaihtaminen
function changeQuality(quality){
	player.setPlaybackQuality(quality);
}

//Videon ääni pois
function mutePlayer() {
	player.setVolume(0);
	$('#unmute').removeClass('hidden');
	$('#mute').addClass('hidden');
}

//Melonta-video
function loadPaddling(){
	changeVideo('y07hoA0ttMc');
	$('#actionbox').addClass('hidden');
	$('#actionbox-paddling').removeClass('hidden');

	startProgress();
}

//Melonta-videon progress bar
function startProgress() {
	var i = 0;

	var counterBack = setInterval(function () {
		i++
		var percentage = Math.floor((i / 15) * 100);
		if(i <= 15){
			$('#paddling-progress').css('width', percentage + '%');
			$('#paddling-progress').text(percentage + '%');
			console.log('progress status ' + percentage + '%');
		} else {
			clearInterval(counterBack);
			user.paddlingCompleted = true;
			$('#btnUkkokoli').removeClass('hidden');
		}
	}, 1000);

}

//Pääsivun lataus
function loadUkko(){
	if (user.paddlingCompleted === true) {
		$('#btnPaddling').addClass('hidden');
	}

	changeVideo('KhFFIFeZBqg');
	$('#actionbox').removeClass('hidden');
	$('#actionbox-paddling').addClass('hidden');
}