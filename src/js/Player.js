import Song, { reproducir, volumen } from "./Song.js";
export default class Player {
	constructor(map) {
		let n = 1;
		for (var key in map) {
			const vin = `.v${n}`;
			const a = `.btn-up${n}`;
			const b = `.btn-down${n}`;
			const c = `.btn-reload${n}`;
			const cancion = new Song(map[key], key, vin, a, b, c);
			reproducir(cancion);
			volumen(cancion);
			n++;
		}
	}
}
