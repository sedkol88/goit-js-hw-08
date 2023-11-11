import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const playerEl = new Player(iframe);

//----------------------------------------------------------------------
const saveTime = throttle(function() {
    // Отримати поточний час відтворення відео
    playerEl.getCurrentTime().then(function(time) {
        let videoTime = time;

        // Зберегти час відтворення відео в локальному сховищі
        localStorage.setItem('videoplayer-current-time', videoTime);
    });
}, 1000);

//------------------------------------------------------------------------
playerEl.on('timeupdate', saveTime);