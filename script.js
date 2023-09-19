console.log("hello");
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSong = document.getElementById('masterSong');

let song = [
    {songName: "punjfabi",filePath: "songs/1.mp3",coverPath:"m1.jpg"},
    {songName: "Rabba",filePath: "songs/2.mp3",coverPath:"m5.jpg"},
    {songName: "na jaana",filePath: "songs/3.mp3",coverPath:"m6.jpg"},
    {songName: "bhula Dena",filePath: "songs/4.mp3",coverPath:"m1.jpg"},
    {songName: "warriyo",filePath: "songs/5.mp3",coverPath:"m5.jpg"},
    {songName: "tumhari kasam",filePath: "songs/6.mp3",coverPath:"m6.jpg"},
    {songName: "different",filePath: "songs/7.mp3",coverPath:"m5.jpg"},

   

]

// songs.forEach((element) => {
    
// });

masterPlay.addEventListener('click',() =>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', () =>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    myprogressbar.value = progress;
   
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})
 songItem.forEach((element,i)=>{
 
     element.getElementsByTagName("img")[0].src = song[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
makeAllPlays();

let songsIndex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
masterSong.innerText=song[songIndex].songName;
audioElement.src ='songs/'+songsIndex+'.mp3';
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    
    audioElement.src ='songs/'+songIndex+'.mp3';
    masterSong.innerText=song[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    
        songIndex-=1;
    
    audioElement.src ='songs/'+songIndex+'.mp3';
    masterSong.innerText=song[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');

})