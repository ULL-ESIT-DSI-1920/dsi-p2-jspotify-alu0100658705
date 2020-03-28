import audios from '../assets/audio/*.mp3';
import Player from './Player.js';

const map = {};
let i = 0;

for (var key in audios) {
  i++;
  map[`.item-${i}`] = audios[key];
}

const player = new Player(map);
console.log(player);
