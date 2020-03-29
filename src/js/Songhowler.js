export default class Song {
	constructor(name, clave, vin) {
		this.audio = new Howl({
			src: [name],
			loop: true,
			volume: 0.5
		});
		this.element = document.querySelector(vin);
		this.btn = document.querySelector(clave);
		this.active = true;
	}
}

export function reproducir(song) {
	song.btn.onclick = () => {
		if (song.active) {
			song.element.classList.add("open");
			song.audio.play();
			song.active = false;
		} else {
			song.element.classList.remove("open");
			song.audio.pause();
			song.active = true;
		}
	};
}
