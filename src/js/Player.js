import Song, { reproducir } from './Song.js';
export default class Player {
  constructor (map) {
    let n = 1;
    for (var key in map) {
      const vin = `.v${n}`;
      const cancion = new Song(map[key], key, vin);
      reproducir(cancion);
      n++;
    }
  }
}
