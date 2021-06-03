// ;(function () {
//     let player;
//     const playerContainer = $('.player');

//     let eventsInit = () => {
//         $('.player__start').on('click', e =>{
//             e.preventDefault();
//             const btn = $(e.currentTarget);

//             if(playerContainer.hasClass('paused')){
                
//                 player.pauseVideo();
//             }else{
                
//             player.playVideo();
//             }
//             $('.player__playback').click(e =>{
//                 const bar = $(e.currentTarget);
//                 const clickedPosition = e.originalEvent.layerX
//                 const newButtonPositionpercent = (clickedPosition  / bar.width()) *100;
//                 const newPlaybackPosition = (player.getDuration() / 100) * newButtonPositionpercent;
//                 $('.player__playback-button').css({
//                     left: `${newButtonPositionpercent}%`
//                 })  
//                 player.seekTo(newPlaybackPosition)          
//             })
//         });

//         $('.player__splash').click(e => {
//             player.playVideo()
//         })
//     }

//     const formatTime = timeSec =>{
//         const rounTime = Math.round(timeSec);

//         const minutes = addZero(Math.floor(rounTime / 60));
//         const seconds = addZero(rounTime - minutes * 60);

//         function addZero(num){
//             return num < 10 ? `0${num}` : num;
//         }

//         return `${minutes} : ${seconds}`;
//     }

//     const onPlayerReady = () => {
//         let interval;
//         const durationSec = player.getDuration();
//         $('.player__duration-estimate').text(formatTime(durationSec));

//         if(typeof interval !== 'undefined'){
//             clearInterval(interval);
//         }
//         interval = setInterval(() => {
//                 const completedSec = player.getCurrentTime();
//                 const compleatedPercent = (completedSec /durationSec) * 100;

//                 $('.player__playback-button').css({
//                     left: `${compleatedPercent}%`
//                 })

//                 $('.player__duration-completed').text(formatTime(completedSec));
//             }, 1000);
//     }

//     const onPlayerStateChange = event => {
//         switch (event.data) {
//             case 1:
//             playerContainer.addClass('active')
//             playerContainer.addClass('paused');
//                 break;
        
//             case 2:
//             playerContainer.removeClass('active')
//             playerContainer.removeClass('paused');
//                 break;
//         }
       
//     };

//     function onYouTubeIframeAPIReady() {
//         player = new YT.Player('yt-player', {
//             height: '391',
//             width: '662',
//             videoId: 'ma67yOdMQfs',
            
//             events: {
//                 'onReady': onPlayerReady,
//                 'onStateChange': onPlayerStateChange
//             },
//             playerVars: {
//                 controls: 0,
//                 disablekb: 0,
//                 rel: 0,
//                 modestbranding: 0
//             }
//         });
//     }
//     eventsInit();
// })();