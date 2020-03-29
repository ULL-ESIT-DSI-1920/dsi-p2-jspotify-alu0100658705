export default class Song {
	constructor(name, clave, vin, b_1, b_2, b_3) {
		this.audio = new Audio(name);
		this.element = document.querySelector(vin);
		this.btn = document.querySelector(clave);
		this.btn_up = document.querySelector(b_1);
		this.btn_down = document.querySelector(b_2);
		this.btn_reload = document.querySelector(b_3);
		this.active = true;
	}
}

export function reproducir(song) {
	song.btn.onclick = () => {
		if (song.active) {
			song.element.classList.add("open");
			song.audio.play();
			song.active = false;
			song.btn_reload.onclick = () => {
				song.audio.load();
				song.audio.play();
			};
		} else {
			song.element.classList.remove("open");
			song.audio.pause();
			song.active = true;
		}
	};
}

export function volumen(song) {
	if (song.active) {
		let vol = 0.4;
		song.btn_up.onclick = () => {
			if (vol < 1.0) {
				vol += 0.1;
				song.audio.volume = vol;
			}
		};
		song.btn_down.onclick = () => {
			if (vol > 0) {
				vol -= 0.1;
				song.audio.volume = vol;
			}
		};
	}
}
