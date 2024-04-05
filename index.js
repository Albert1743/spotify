const music_arr = [
    {
        id: 1,
        name: "Приятная",
        url: "./music/Эндшпиль&Ollane-Приятная.mp3",
        artist: "Эндшпиль & Ollane",
        duration: "4:00",
        img_url: "./img/Эндшпиль_x_Ollane_Приятная.jpg",
        album: "",
        date_added: "Dec 10, 2021"
    },
    {
        id: 2,
        name: "Wain Ma'ady",
        url: "./music/Cheb Arab - Wain Ma'ady.mp3",
        artist: "Cheb Arab",
        duration: "3:24",
        img_url: "./",
        album: "",
        date_added: "June 2, 2013"
    },
    {
        id: 3,
        name: "Paint The Town Red",
        url: "./music/Doja Cat - Paint The Town Red.mp3",
        artist: "Doja Cat",
        duration: "3:51",
        img_url: "",
        album: "",
        date_added: "May 17, 2023"
    },
    {
        id: 4,
        name: "Beautiful",
        url: "./music/Eminem - Beautiful.mp3",
        artist: "Eminem",
        duration: "6:32",
        img_url: "",
        album: "",
        date_added: "July 12, 2015"
    },
    {
        id: 5,
        name: "Спонсор твоих проблем",
        url: "./music/Guf ft A.V.G - Спонсор твоих проблем.mp3",
        artist: "Guf & A.V.G",
        duration: "3:58",
        img_url: "",
        album: "",
        date_added: "Nov 29, 2023"
    },
    {
        id: 6,
        name: "По сути",
        url: "./music/JANAGA - По сути.mp3",
        artist: " Janaga",
        duration: "2:23",
        img_url: "",
        album: "",
        date_added: "Oct 22, 2023"
    },
    {
        id: 7,
        name: "Удали, Забудь, Уходи",
        url: "./music/JANAGA-Удали, забудь, уходи.mp3",
        artist: "Janaga",
        duration: "2:32",
        img_url: "",
        album: "",
        date_added: "Aug 23, 2023"
    },
    {
        id: 8,
        name: "Animals",
        url: "./music/Maroon 5 - Animals.mp3",
        artist: "Maroon 5",
        duration: "3:49",
        img_url: "",
        album: "",
        date_added: "Feb 11, 2017"
    },
    {
        id: 9,
        name: "One More Night",
        url: "./music/Maroon 5 One More Night.mp3",
        artist: "Maroon 5",
        duration: "3:39",
        img_url: "",
        album: "",
        date_added: "Jan 3, 2019"
    },
    {
        id: 10,
        name: "All The Time",
        url: "./music/Miyagi & Andy Panda - All The Time.mp3",
        artist: "Miyagi & Andy Panda",
        duration: "3:39",
        img_url: "",
        album: "",
        date_added: "Sep 30, 2022"
    },
    {
        id: 11,
        name: "Пронзай",
        url: "./music/Miyagi_&_Эндшпиль_Пронзай_.mp3",
        artist: "Miyagi & Эндшпиль",
        duration: "3:32",
        img_url: "",
        album: "",
        date_added: "Oct 25, 2023"
    },
    {
        id: 12,
        name: "In Love",
        url: "./music/Miyagi_Эндшпиль_feat_KADI_In_Love.mp3",
        artist: "Miyagi & Эндшпиль feat KADI",
        duration: "3:12",
        img_url: "",
        album: "",
        date_added: "March 20, 2021"
    },
    {
        id: 13,
        name: "Круговорот",
        url: "./music/Miyagi&Эндшпиль-Круговорот.mp3",
        artist: "Miyagi & Эндшпиль",
        duration: "2:38",
        img_url: "",
        album: "",
        date_added: "Dec 21, 2023"
    },
    {
        id: 14,
        name: "Without Me Remix",
        url: "./music/Miyagi&Эндшпиль&Eminem - Without - Remix.mp3",
        artist: "Miyagi & Эндшпиль & Eminem",
        duration: "2:41",
        img_url: "",
        album: "",
        date_added: "Feb 11, 2020"
    },
    {
        id: 15,
        name: "Popular",
        url: "./music/The Weekend - Popular.mp3",
        artist: "The Weekend",
        duration: "3:49",
        img_url: "",
        album: "",
        date_added: "Jan 19, 2023"
    },
]

const cont = document.querySelector('tbody')
const audio = document.querySelector('audio')
const player = document.querySelector('.player')
const playButton = document.querySelector('.player button:nth-of-type(1)');
const pauseButton = document.querySelector('.player button:nth-of-type(2)');
let songIndex = 0;
let isPlaying = false
let prev = null

const audio_anim = ` <dotlottie-player class="anim" src="https://lottie.host/ce20256a-3044-45f0-80b7-a30c6a58b50d/UJ4fg8gB9X.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>`

reload(music_arr, cont)
function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        const tr = document.createElement('tr')
        const idx = document.createElement('td')
        const title = document.createElement('td')
        const artist = document.createElement('td')
        const date_song = document.createElement('td')
        const actions = document.createElement('td')
        const duration = document.createElement('span')
        const img = document.createElement('img')

        idx.innerHTML = arr.indexOf(item) + 1
        title.innerHTML = item.name
        artist.innerHTML = item.artist
        date_song.innerHTML = item.date_added
        duration.innerHTML = item.duration


        actions.append(img, duration)
        tr.append(idx, title, artist, date_song, actions,)
        place.append(tr)

        idx.onclick = () => {
            if (isPlaying && item.id === +audio.id) {
                idx.innerHTML = arr.indexOf(item) + 1
                audio.pause()
                isPlaying = false
            } else {
                if (prev) prev.idx.innerHTML = prev.num
                audio.id = item.id
                audio.src = item.url
                audio.play()
                idx.innerHTML = audio_anim
                prev = { idx, num: arr.indexOf(item) + 1 }
                isPlaying = true
            }
        }
    }
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = 'pause';
    } else {
        audio.pause();
        playButton.innerHTML = 'play';
    }
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= music_arr.length) {
        currentSongIndex = 0;
    }
    audio.src = music_arr[songIndex].url;
    audio.play();
    playButton.innerHTML = 'pause'
}

audio.onended = () => {
    nextSong();
};