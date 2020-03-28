// Importamos el audio de /src/assets

import audios from "../assets/audio/*.mp3";
import Player from "./Player.js";

const map = {};
let i = 0;
const a = ".item-";

for (var key in audios) {
	if (audios.hasOwnProperty(key)) {
		i++;
		map[`.item-${i}`] = audios[key];
	}
}

const player = new Player(map);
