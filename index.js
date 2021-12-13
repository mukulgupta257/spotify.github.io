let songindex=0;
let playbutton=document.getElementById("playbutton");
let progressbar=document.getElementById("progressbar");
let audioElement=new Audio('./audio/agartumsathho.mp3')
let songslist=[
    {songname:"Agar tum sath ho", path:"./audio/agartumsathho.mp3"},
    {songname:"Chahu mai ya na", path:"./audio/2.mp3"},
    {songname:"Tujhe kitna chah ne lage", path:"./audio/3.mp3"},
    {songname:"Tose naina", path:"./audio/4.mp3"},
]
playbutton.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        playbutton.src="./media/pause_circle_outline_white_24dp.svg";
        document.getElementById("playinggif").style.opacity="1";
        document.getElementById("songname").style.opacity="1";
    }
    else{
        audioElement.pause();
        playbutton.src="./media/play-circle-regular.svg"
        document.getElementById("playinggif").style.opacity="0";
        document.getElementById("songname").style.opacity="0";
    }
})
audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})
let songnameaccess=Array.from(document.getElementsByClassName('musicname'))
songnameaccess.forEach(element => {
console.log(element)
// element.classList.icon.src="./media/pause_circle_outline_white_24dp.svg" 
});