
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); 
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');


const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); 

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); 
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); 


let songs = [
    {
        id: 1,
        title: "Lovely",
        artist: "Billie Eilish",
        album: "13 Reasons Why: Season 2",
        albumArtUrl: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F0a59a8c2c66bb9b588c5f68d9f7acd22.1000x1000x1.png",
        audioSrc: "audio/lovely.mp3",
        videoBgSrc: "videos/lovely.mp4",
        
        lyrics: [
            { time: 21.5, text: "Thought I found a way" },
            { time:25.5, text: "Thought I found a way out" },
            { time:29.5, text: "But you never go away" },
            { time:33.5, text: "So I guess I gotta stay now"},
            { time: 36.5, text: "Oh, I hope some day I'll make it out of here" },
            { time: 45, text: "Even if it takes all night or a hundred years" },
            { time: 53.5, text: "Need a place to hide, but I can't find one near" },
            { time: 61.5, text: "Wanna feel alive, outside I can't fight my fear" },
            { time: 71.5, text: "Isn't it lovely, all alone?" },
            { time: 75.5, text: "Heart made of glass, my mind of stone" },
            { time: 80, text: "Tear me to pieces, skin to bone" },
            { time: 84.5, text: "Hello, welcome home" },
            { time: 92.5, text: "Walking out of time" },
            { time: 96.5, text: "Looking for a better place" },
            { time: 100.5, text: "Something's on my mind" },
            { time: 104.5, text: "Always in my head space" },
            { time: 107.5, text: "But I know someday I'll make it out of here" },
            { time: 116, text: "Even if it takes all night or a hundred years" },
            { time: 124.2, text: "Need a place to hide, but I can't find one near" },
            { time: 132.5, text: "Wanna feel alive, outside I can't fight my fear" },
            { time: 142.5, text: "Isn't it lovely? All alone " },
            { time: 146.5, text: "Heart made of glass, my mind of stone" },
            { time: 150.5, text: "Tear me to pieces, skin to bone" },
            { time: 155.5, text: "Hello, welcome home" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4", 
        
        lyrics: [
            { time: 3 , text: "I found a love for me" },
            { time: 10, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" },
            { time: 100.9, text: "Well, I found a woman stronger than anyone I know" },
            { time: 108.6, text: "She shares my dreams, I hope that, someday, I'll share her home" },
            { time: 115.9, text: "I found a love to carry more than just my secrets" },
            { time: 124.6, text: "To carry love, to carry children of our own" },
            { time: 130.6, text: "We are still kids, but we're so in love" },
            { time: 134.6, text: "Fightin' against all odds" },
            { time: 138.7, text: "I know we'll be alright this time" },
            { time: 146.7, text: "Darlin', just hold my hand" },
            { time: 150.3, text: "Be my girl, I'll be your man" },
            { time: 153.7, text: "I see my future in your eyes" },
            { time: 160.5, text: "Baby, I'm dancin' in the dark with you between my arms" },
            { time: 172.3, text: "Barefoot on the grass while listenin' to our favourite song" },
            { time: 179.3, text: "When I saw you in that dress, lookin' so beautiful" },
            { time: 185.3, text: "I don't deserve this, darlin', you look perfect tonight" },
            { time: 205.9, text: "Baby, I'm dancin' in the dark with you between my arms" },
            { time: 217.5, text: "We're barefoot on the grass, oh, listenin' to our favourite song" },
            { time: 224.5, text: "I have faith in what I see, now I know I have met" },
            { time: 230.5, text: "An angel in person and she looks perfect" },
            { time: 237.9, text: "I don't deserve this, you look perfect tonight" },
        ]
    },    
    {
        id: 3,
        title: "Sweet but psycho",
        artist: "Ava Max",
        album: "Heaven & Hell",
        albumArtUrl: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2Fcf1083f27d3050834666204be2aaa1fe.1000x1000x1.png",
        audioSrc: "audio/Sweet-but-Psycho.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4", 
        
        lyrics: [
            { time: 1.5, text: "Oh, she's sweet but a psycho" },
            { time: 4, text: "A little bit psycho" },
            { time: 5.5, text: "At night, she's screamin', Im-ma-ma-ma out my mind" },
            { time: 8.5, text: "Oh, she's hot but a psycho" },
            { time: 11.5, text: "So left, but she's right though" },
            { time: 13.4, text: "At night, she's screamin , Im-ma-ma-ma out my mind" },
            { time: 17, text: "She'll make you curse, but she a blessin" },
            { time: 20.5, text: "She'll rip your shirt within a second" },
            { time: 24.1, text: "You'll be comin' back, back for seconds" },
            { time: 27.6, text: "With your plate, you just can't help it" },
            { time: 30.5, text: "No, no" },
            { time: 33.5, text: "You'll play alo-o-ong, let her lead you o-o-on" },
            { time: 37, text: "You'll be sayin , No, no" },
            { time: 40.8, text: "Then sayin', Yes, yes, yes, 'cause she messin' with your head" },
            { time: 44.8, text: "Oh, she's sweet but a psycho" },
            { time: 47.5, text: "A little bit psycho" },
            { time: 49.3, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },
            { time: 52, text: "Oh, she's hot but a psycho" },
            { time: 54.7, text: "So left, but she's right though" },
            { time: 56.5, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },
            { time: 59.3, text: "Grab-a-cop-gun kinda crazy" },
            { time: 62, text: "She's poison but tasty" },
            { time: 63.9, text: "Yeah, people say, Run, don't walk away" },
            { time: 66.7, text: "'Cause she's sweet but a psycho" },
            { time: 69.2, text: "A little bit psycho" },
            { time: 71, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },            
            { time: 74.5, text: "See, someone said don't drink her potions" },
            { time: 78.2, text: "She'll kiss your neck with no emotion" },
            { time: 82, text: "When she's mean, you know you love it" },
            { time: 85.7, text: "She tastes so sweet, don't sugarcoat it" },
            { time: 88.4, text: "No, no" },
            { time: 91.1, text: "You'll play alo-o-ong, let her lead you o-o-on" },
            { time: 94.9, text: "You'll be sayin', 'No' 'No, no, no', no 'No' " },
            { time: 98.6, text: "Then sayin', 'Yes, yes, yes,' 'cause she messin' with your head" },
            { time: 102.5, text: "Oh, she's sweet but a psycho" },
            { time: 105.1, text: "A little bit psycho" },
            { time: 106.9, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },
            { time: 109.9, text: "Oh, she's hot but a psycho" },
            { time: 112.6, text: "So left, but she's right though" },
            { time: 114.1, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },
            { time: 117.1, text: "Grab-a-cop-gun kinda crazy" },
            { time: 119.7, text: "She's poison but tasty" },
            { time: 121.3, text: "Yeah, people say, Run, don't walk away" },
            { time: 124.2, text: "'Cause she's sweet but a psycho" },
            { time: 127, text: "A little bit psycho" },
            { time: 128.8, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },
            { time: 139.8, text: "You're just like me, you're out your mind" },
            { time: 143, text: "I know it's strange, we're both the crazy kind" },
            { time: 147, text: "You're tellin' me that I'm insane" },
            { time: 150.4, text: "Boy, don't pretend that you don't love the pain" },
            { time: 153, text: "Oh, she's sweet but a psycho , A little bit psycho" },
            { time: 157.5, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },
            { time: 160.4, text: "Oh, she's hot but a psycho" },
            { time: 162.8, text: "So left, but she's right though" },
            { time: 164.7, text: "At night, she's screamin', I'm-ma-ma-ma out my mind" },
            { time: 167.8, text: "Grab-a-cop-gun kinda crazy" },
            { time: 170.1, text: "She's poison but tasty" },
            { time: 172.2, text: "Yeah, people say, Run, don't walk away" },
            { time: 175, text: "Cause she's sweet but a psycho" },
            { time: 177.4, text: "Oh, a little bit psycho" },
            { time: 179.3, text: "At night, she's screamin',  I'm-ma-ma-ma out my mind" },
        ]
    },
    {
        id: 4,
        title: "All girls are the same",
        artist: "Juice WRLD",
        album: "Goodbye & Good Riddance",
        albumArtUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Juice_Wrld_-_All_Girls_Are_the_Same.jpg/250px-Juice_Wrld_-_All_Girls_Are_the_Same.jpg",
        audioSrc: "audio/allgirlsaresame.mp3",
        videoBgSrc: "videos/allgirlsaresame_bg.mp4",
        lyrics: [
            { time: 4.5, text: "Mhm, they're rotting my brain, love" },
            { time: 7.5, text: "These hoes are the same" },
            { time: 13, text: "I admit it, another ho got me finished" },
            { time: 16.5, text: "Broke my heart, oh, no, you didn't" },
            { time: 19.5, text: "Fuck sippin', I'ma down a whole bottle" },
            { time: 22, text: "Hard liquor, hard truth, can't swallow" },
            { time: 25.3, text: "Need a bartender, put me out my sorrow" },
            { time: 28.4, text: "Wake up the next day in the Monte Carlo" },
            { time: 31.3, text: "With a new woman, tell me she from Colorado" },
            { time: 33.8, text: "And she love women, she'll be gone by tomorrow" },
            { time: 37, text: "Who am I kiddin'?" },
            { time: 38, text: "All this jealousy and agony that I sit in" },
            { time: 40.2, text: "I'm a jealous boy, really feel like John Lennon" },
            { time: 44, text: "I just want real love, guess it's been a minute" },
            { time: 47.3, text: "Pissed off from the way that I don't fit in (I don't fit in)" },
            { time: 51.5, text: "Tell me, what's the secret to love? I don't get it" },
            { time: 54.2, text: "Feel like I be runnin' a race I'm not winnin'" },
            { time: 57.3, text: "Ran into the devil today and she grinnin'" },
            { time: 66.6, text: "Hey, these girls are insane, yeah, uh" },
            { time: 72.8, text: "All girls are the same, they're rotting my brain, love" },
            { time: 78.5, text: "Think I need a change before I go insane, love" },
            { time: 84.6, text: "All girls are the same, they're rotting my brain, love" },
            { time: 90.3, text: "Think I need a change before I go insane, love" },
            { time: 96, text: "Ten minutes, she told me it would take ten minutes" },
            { time: 99.3, text: "To break my heart, oh, no, she didn't" },
            { time: 102.4, text: "Fuck livin', I'ma drown in my sorrow" },
            { time: 105.2, text: "Fuck givin', I'ma take, not borrow" },
            { time: 108, text: "And I'm still sinnin', I'm still losin' my mind " },
            { time: 111, text: "I know I been trippin', I'm still wastin' my time" },
            { time: 114, text: "All the time given, am I dyin'? Am I livin'?" },
            { time: 117, text: "It's fuck feelings, my sorrow go up to the ceilin'" },
            { time: 132, text: "Now I am insane, demons in my brain, love" },
            { time: 137.9, text: "Peace I can't attain 'cause all these girls the same, love" },
            { time: 143.8, text: "Now I am insane, demons in my brain, love" },
            { time: 149.5, text: "Peace I can't attain 'cause all these girls the same, love" }
        ]
    },
    {
        id: 5,
        title: "Starboy",
        artist: "The Weeknd", 
        album: "Starboy by The Weeknd",
        albumArtUrl: "https://imgs.search.brave.com/jldJyhQbQzdFklcIjZbYEtpRUjao0gv2P3cL42wSpAg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Ro/ZS13ZWVrbmQvaW1h/Z2VzLzIvMmYvU3Rh/cmJveV8oRGVsdXhl/KS5qcGcvcmV2aXNp/b24vbGF0ZXN0L3Nj/YWxlLXRvLXdpZHRo/LWRvd24vMjY4P2Ni/PTIwMjUwNTA0MjMy/MzAy", 
        audioSrc: "audio/starboy.mp3",
        videoBgSrc: "videos/starboy.mp4",
        lyrics: [
            { time: 16.5, text: "I'm tryna put you in the worst mood, ah" },
            { time: 18.5, text: "P1 cleaner than your church shoes, ah" },
            { time: 21.5, text: "Milli point two just to hurt you, ah" },
            { time: 24, text: "All red Lamb' just to tease you, ah" },
            { time: 26.4, text: "None of these toys on lease too, ah" },
            { time: 29, text: "Made your whole year in a week too, yah" },
            { time: 31.8, text: "Main bitch outta your league too, ah" },
            { time: 34.2, text: "Side bitch outta your league too, ah" },
            { time: 37.2, text: "House so empty, need a centerpiece" },
            { time: 39.6, text: "Twenty racks a table, cut from ebony" },
            { time: 42.3, text: "Cut that ivory into skinny pieces" },
            { time: 44.2, text: "Then she clean it with her face, man, I love my baby, ah" },
            { time: 47, text: "You talkin' money, need a hearin' aid" },
            { time: 50, text: "You talkin' 'bout me, I don't see the shade" },
            { time: 52.4, text: "Switch up my style, I take any lane" },
            { time: 54.6, text: "I switch up my cup, I kill any pain" },
            { time: 61.3, text: "Look what you've done" },
            { time: 66.2, text: "I'm a motherfuckin' starboy" },
            { time: 71.5, text: "Look what you've done" },
            { time: 76.4, text: "I'm a motherfuckin' starboy" },
            { time: 78.2, text: "Every day, a nigga try to test me, ah" },
            { time: 80.8, text: "Every day, a nigga try to end me, ah" },
            { time: 83, text: "Pull off in that Roadster SV, ah" },
            { time: 85.8, text: "Pockets overweight, gettin' hefty, ah" },
            { time: 88.3, text: "Comin' for the king, that's a far cry, I" },
            { time: 91.3, text: "I come alive in the fall time, I" },
            { time: 94, text: "The competition, I don't really listen" },
            { time: 95.7, text: "I'm in the blue Mulsanne, bumpin' New Edition" },
            { time: 99.2, text: "House so empty, need a centerpiece" },
            { time: 101.2, text: "Twenty racks a table, cut from ebony" },
            { time: 104.2, text: "Cut that ivory into skinny pieces" },
            { time: 105.8, text: "Then she clean it with her face, man, I love my baby, ah" },
            { time: 109, text: "You talkin' money, need a hearin' aid" },
            { time: 111.9, text: "You talkin' 'bout me, I don't see the shade" },
            { time: 114.4, text: "Switch up my style, I take any lane" },
            { time: 116.4, text: "I switch up my cup, I kill any pain" },
            { time: 123, text: "Look what you've done" },
            { time: 128, text: "I'm a motherfuckin' starboy" },
            { time: 133.3, text: "Look what you've done" },
            { time: 138.3, text: "I'm a motherfuckin' starboy" },
            { time: 140.7, text: "Let a nigga brag Pitt" },
            { time: 142, text: "Legend of the fall, took the year like a bandit" },
            { time: 144.7, text: "Bought Mama a crib and a brand new wagon" },
            { time: 147.4, text: "Now she hit the grocery shop lookin' lavish" },
            { time: 149.7, text: "Star Trek roof in that Wraith of Khan" },
            { time: 152.4, text: "Girls get loose when they hear this song" },
            { time: 155, text: "A hundred on the dash get me close to God" },
            { time: 157, text: "We don't pray for love, we just pray for cars" },
            { time: 161, text: "House so empty, need a centerpiece" },
            { time: 163, text: "Twenty racks a table, cut from ebony" },
            { time: 166, text: "Cut that ivory into skinny pieces" },
            { time: 168, text: "Then she clean it with her face, man, I love my baby, ah" },
            { time: 170.9, text: "You talkin' money, need a hearin' aid" },
            { time: 173.9, text: "You talkin' 'bout me, I don't see the shade" },
            { time: 176.3, text: "Switch up my style, I take any lane" },
            { time: 178.6, text: "I switch up my cup, I kill any pain" },
            { time: 185, text: "Look what you've done" },
            { time: 190.3, text: "I'm a motherfuckin' starboy" },
            { time: 195.3, text: "Look what you've done" },
            { time: 200.5, text: "I'm a motherfuckin' starboy" },
            { time: 205.5, text: "Look what you've done" },
            { time: 210.5, text: "I'm a motherfuckin' starboy" },
            { time: 215.5, text: "Look what you've done" },
            { time: 220.5, text: "I'm a motherfuckin' starboy" },
            
        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; 


function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); 
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); 
    backgroundVideo.pause();
    backgroundVideo.src = ""; 
    backgroundVideo.load();
    pauseTrack(); 
}


function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = ""; 
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); 

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); 
    }
}


function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">No songs available.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); 
        });

        
        listItem.addEventListener('mouseenter', () => {
           
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); 
            }
        });
        listItem.addEventListener('mouseleave', () => {
          
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); 
                backgroundVideo.src = ""; 
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); 
            }
        });

        songListElement.appendChild(listItem);
    });
}


function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics not available.</p>"; 
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); 
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}


function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; 
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics are not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); 
        span.classList.add('lyric-line'); 
        lyricsContainer.appendChild(span);
        
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error song play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); 
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
           
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

       
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

           
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        
    } else {
        nextTrack();
    }
});


backToHomeFromDetailBtn.addEventListener('click', showHomePage); 
backToHomeBtn.addEventListener('click', showHomePage); 


playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});


function init() {
    console.log("Initializing..."); 
    console.log("Songs array length:", songs.length); 
    console.log("songListElement:", songListElement); 

    renderSongList(); 
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
       
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "No Song";
        playerTrackArtist.textContent = "Add song";
        lyricsContainer.innerHTML = "<p>Please add a song from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; 
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; 
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); 
    console.log("Initialization complete."); 
}

init();