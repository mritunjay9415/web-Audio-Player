// logic for profile card 
function toggleMenu(){
    let menu=document.getElementById("profileMenu");
    if(menu.style.display=="block"){
        menu.style.display="none";
    }
    else{
        menu.style.display="block";
    }
}

// logic for play pause
let myAudio=document.getElementById("masterAudio");
let playIcon=document.getElementById("playIcon");
let pauseIcon=document.getElementById("pauseIcon");

function togglePlay(){
    if(myAudio.paused){
        myAudio.play();
        playIcon.style.display="none";
        pauseIcon.style.display="block";
        console.log("Gaana Chalu Hogya!")
    }
    else{
        myAudio.pause();
        playIcon.style.display="block";
        pauseIcon.style.display="none";
        console.log("Ganna Ruk Gaya!")
    }
}

// playlist Setup
let songIndex=0;
let songs=[
    {
        // 0
    songName:"dil chahta hai",
    filepath:"./songs-mp3/Dil Chahta Hai [Full Song] Dil Chahta Hai.mp3",
    coverpath:"./songs/dil-chahta-hai.jpg"
    },
    {
        // 1
    songName:"tere hawale",
    filepath:"./songs-mp3/Tere Hawaale (Full Video) Laal Singh Chaddha  Aamir,Kareena  Arijit,Shilpa  Pritam,Amitabh,Advait.mp3",
    coverpath:"./songs/Tere-Hawale.png"
    },
    {
        // 2
    songName:"wo ladki hai kahan",
    filepath:"./songs-mp3/Wo Ladki Hai Kahan - Trending Version (Lyrics)  Dil Chahta Hai  Saif Ali Khan, Sonali Kulkarni.mp3",
    coverpath:"./songs/Vo-Ladki-Hai-Kahan.png"
    },
    {
        // 3
    songName:"lut le gaya",
    filepath:"./songs-mp3/Dhurandhar  Lutt Le Gaya - Lyrical  Ranveer Singh, Akshaye Khanna, Shashwat Sachdev, Simran C.mp3",
    coverpath:"./songs/Lut-Le-Gaya.png"
    },
    {
        // 4
    songName:"vaari jawan",
    filepath:"./songs-mp3/VAARI JAAVAN (Full Video) Dhurandhar The Revenge Ranveer Singh Shashwat Sachdev,Jyoti N,Jasmine S.mp3",
    coverpath:"./songs/Vaari-Jawan.png"
    },
    {
        // 5
    songName:"ishq jalakar",
    filepath:"./songs-mp3/ishq-jalakar.mp3",
    coverpath:"./songs/Ishq-Jalakar.png"
    },
    {
        // 6
    songName:"udd jaa kaale kaava",
    filepath:"./songs-mp3/udja kale kauwan .mp3",
    coverpath:"./songs/Udd-Jaa-Kaale-Kaava.png"
    },
    {
        // 7
    songName:"jitni dafa",
    filepath:"./songs-mp3/jitni dafa.mp3",
    coverpath:"./songs/Jitni-Dafa.png"
    },
    {
        // 8
    songName:"gehra hua",
    filepath:"./songs-mp3/Gehra-hua.mp3",
    coverpath:"./songs/Gehra-Hua.png"
    },
    {
        // 9
    songName:"tu jo mila",
    filepath:"./songs-mp3/Tu-Jo-MIla.mp3",
    coverpath:"./songs/Tu-Jo-Mila.png"
    },
    {
        // 10
    songName:"aari aari",
    filepath:"./songs-mp3/Aari-Aari.mp3",
    coverpath:"./songs/Aari-Aari.png"
    },
    {
        // 11
    songName:"not guilty",
    filepath:"./songs-mp3/Not-Guilty.mp3",
    coverpath:"./songs/Not-Guilty.png"
    },
    {
        // 12
    songName:"jhol",
    filepath:"./songs-mp3/Jhol.mp3",
    coverpath:"./songs/Jhol.png"
    },
    {
        // 13
    songName:"sapna jahan",
    filepath:"./songs-mp3/sapna-jahan.mp3",
    coverpath:"./songs/Sapna-Jahan.png"
    },
    {
        // 14
    songName:"tu kisi rail si",
    filepath:"./songs-mp3/Rail Si -Masan.mp3",
    coverpath:"./songs/Masan.png"
    },
    {
        // 15
    songName:"baareshein",
    filepath:"./songs-mp3/Baareshein.mp3",
    coverpath:"./songs/Baarishein.png"
    },
    {
        // 16
    songName:"ishqa ve",
    filepath:"./songs-mp3/Ishqa-Ve.mp3",
    coverpath:"./songs/Ishqa-Ve.png"
    },
    {
        // 17
    songName:"nit khair",
    filepath:"./songs-mp3/Nit-Khair.mp3",
    coverpath:"./songs/Nit-Khair.png"
    },
    {
        // 18
    songName:"jhoom",
    filepath:"./songs-mp3/jhoom.mp3",
    coverpath:"./songs/Jhoom.png"
    },
    {
        // 19
    songName:"mere nishan",
    filepath:"./songs-mp3/Mere Nishan.mp3",
    coverpath:"./songs/Mere-Nishan.png"
    },
    {
        // 20
    songName:"alag aasmaan",
    filepath:"./songs-mp3/Anuv Jain - ALAG AASMAAN (a song on the ukulele).mp3",
    coverpath:"./songs/Alag-Aasmaan.png"
    },
    {
        //21
    songName:"rootha kyun",
    filepath:"./songs-mp3/Rootha Kyun Full Song  1920 LONDON  Sharman Joshi, Meera Chopra  Shaarib, Toshi  Mohit Chauhan.mp3",
    coverpath:"./songs/Rootha-Kyun.png"
    },
    {
        //22
    songName:"arz kiya hai",
    filepath:"./songs-mp3/Anuv Jain X Lost Stories - Arz Kiya Hai (Official Video)  Coke Studio Bharat.mp3",
    coverpath:"./songs/Arz-Kiya-Hai.png"
    },
    {
        //23
    songName:"maand",
    filepath:"./songs-mp3/Bayaan, Hasan Raheem, Rovalio - Maand (Lyrics).mp3",
    coverpath:"./songs/Maand.jpg"
    },
    {
        //24
    songName:"by my side",
    filepath:"./songs-mp3/AP Dhillon & Shinda Kahlon - By My Side (Official Audio).mp3",
    coverpath:"./songs/By-My-Side.png"
    },
    {
        //25
    songName:"chal tere ishq mein",
    filepath:"./songs-mp3/Chal Tere Ishq Mein (Female)- Gadar 2 _Utkarsh Sharma,Simratt Kaur _Vishal M,Mithoon,Neeti,Sayeed (1).mp3",
    coverpath:"./songs/Chal-Tere-Ishq-Me.png"
    },
    {
        //26
    songName:"jale2",
    filepath:"./songs-mp3/Jale 2 (Official Video) _ Sapna Choudhary,Aman Jaji,Sahil Sandhu _ Shiva _ New Haryanvi Song 2023.mp3",
    coverpath:"./songs/Jale2.png"
    },
    {
        //27
    songName:"hue bechain",
    filepath:"./songs-mp3/Hue Bechain _ Ek Haseena Thi Ek Deewana Tha _ Music - Nadeem, Palak Muchhal _ Yasser Desai.mp3",
    coverpath:"./songs/Hue-Bechain.png"
    },
];

// fetching HTML button to js

let loopBtn=document.getElementById("loopBtn");
//coverpath
let masterCover=document.getElementById("masterCover");

// Next button logic

function toggleNext(){
    songIndex=(songIndex+1)%songs.length;

    myAudio.src=songs[songIndex].filepath;
    masterCover.src=songs[songIndex].coverpath;
    myAudio.play();

    playIcon.style.display="none";
    pauseIcon.style.display="block";
}

// Prev button logic

function togglePrev(){
    songIndex=(songIndex-1+songs.length)%songs.length;

    myAudio.src=songs[songIndex].filepath;
    masterCover.src=songs[songIndex].coverpath;
    myAudio.play();

    playIcon.style.display="none";
    pauseIcon.style.display="block";
}
// looping song  logic

let loopPath=loopBtn.querySelector("path");
function toggleLoop(){
    if(myAudio.loop){
        myAudio.loop=false;
        loopPath.style.color="white";
        console.log("Loop Stopped!");
    }
    else{
        myAudio.loop=true;
        loopPath.style.color="#1ed760";
        console.log("Loop Initiated");
    }
}

// to auto play next song
myAudio.addEventListener('ended', toggleNext);

// time function
function formatTime(seconds){
    let min=Math.floor(seconds/60);
    let sec=Math.floor(seconds%60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}

let progressBar=document.getElementById("progressBar");
let currentTimeEl=document.getElementById("currentTime");
let totalTimeEl=document.getElementById("totalTime");

myAudio.addEventListener('timeupdate',()=>{
    let progress=parseInt((myAudio.currentTime/myAudio.duration)*100);
    progressBar.value=progress;
    currentTimeEl.innerText=formatTime(myAudio.currentTime);
});

myAudio.addEventListener('loadedmetadata',()=>{
    totalTimeEl.innerText=formatTime(myAudio.duration);
});

progressBar.addEventListener('change',()=>{
    myAudio.currentTime=(progressBar.value*myAudio.duration)/100;
});

// volume slider

let volumeSlider=document.getElementById("volumeSlider");

volumeSlider.addEventListener('input',()=>{
    myAudio.volume=volumeSlider.value/100;
});

// making card clickable 
function playSongFromCard(index){
    songIndex=index;

    myAudio.src=songs[songIndex].filepath;
    masterCover.src=songs[songIndex].coverpath;

    myAudio.play();

    playIcon.style.display="none";
    pauseIcon.style.display="block";
}

//making searchBar operational

// let searchStatus=document.querySelectorAll(".song-card",".quick-access-card");
let searchBar=document.getElementById("searchBar");

if(!searchBar){
    console.error("Error:search bar HTML me nhi mila ");
}
else{
searchBar.addEventListener('keydown',(e)=>{
    console.log("key dabayi gayi:",e.key);
    if(e.key ==='Enter'){
        e.preventDefault();
        let query=searchBar.value.toLowerCase().trim();

        console.log("dhoondh rahe hain",query);
        if(query==="") return ;

        let foundIndex=songs.findIndex((song)=>{
            let nameToCheck=song.songName?song.songName.toLowerCase():song.filepath.toLowerCase();
            return nameToCheck.includes(query);
        });

        console.log("ganna is index pe mila hai:",foundIndex);
        if(foundIndex!==-1){
            songIndex=foundIndex;

            myAudio.src=songs[songIndex].filepath;
            masterCover.src=songs[songIndex].coverpath;

            console.log("audio ko play hone ka command mila");

            myAudio.play().then(()=>{
                console.log("ganna mast chal rha hai");
            }).catch((err)=>{
                console.error("browser ne ganna block krdiya:",err);
            });

            playIcon.style.display="none";
            pauseIcon.style.display="block";

            // searchStatus.style.display="none";
            searchBar.value="";
            console.log("Ganna mil gaya aur chal rha hai:");
        }
        else{
            alert("aree bhai ye gana nhi hai");
        }
    }
});
}

// speaker mute button

let muteBtn=document.getElementById("muteBtn");
let volumeSlider=document.getElementById("volumeSlider");

let lastVolume=1;
let isMuted=false;

muteBtn.addEventListener('click',()=>{
    if(!isMuted){
        lastVolume=myAudio.volume;
        myAudio.volume=0;
        isMuted=true;

        muteBtn.style.opacity="0.5";
    }
    else{
        myAudio.volume=lastVolume;
        volumeSlider.value=lastVolume*100;
        isMuted=false;

        muteBtn.style.opacity="1";
    }
});