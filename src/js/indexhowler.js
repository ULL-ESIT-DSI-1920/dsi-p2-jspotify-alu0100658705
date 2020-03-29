import audios from "../assets/audio/*.mp3";
import { Howl, Howler } from "howler";
import Song, { reproducir } from "./Songhowler.js";

const canciones = [];
let i;
let n = 1;

for (var key in audios) {
	canciones.push(audios[key]);
}

console.log(canciones);

for (i = 0; i < canciones.length; i++) {
	const vin = `.v${n}`;
	const key = `.item-${n}`;
	const cancion = new Song(canciones[i], key, vin);
	reproducir(cancion);
	n++;
}
