
const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const player = new MusicPlayer(musicList);   //const tanımlanan değişken değiştirlemezken let ile değişebilir
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    title.innerText = music.title;
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

play.addEventListener("click",() =>{
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
    
});

const pauseMusic = () => {
    play.classList = "fa-solid fa-play";
    container.classList.remove("playing");
    audio.pause();

}


function playMusic() {
    play.classList = "fa-solid fa-pause";
    container.classList.add("playing");
    audio.play();

}


prev.addEventListener("click",()=> { prevMusic(); });

next.addEventListener("click", () => { nextMusic(); });

const prevMusic = () => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const calculateTime =(toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye %  60);
    const guncellenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`;
    const sonuc =  `${dakika}:${guncellenSaniye}`;  
    return sonuc; 
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
    
});

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100; 
    if(value == 0){
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        volume.classList = "fa-solid fa-volume-high";
    }
} )

let sesDurumu = "sesli"; 

volume.addEventListener("click",() => {
    if(sesDurumu==="sesli"){
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    } else {
        audio.muted = false;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100; 
    } 

});