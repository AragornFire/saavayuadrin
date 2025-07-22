const series = [
	{name: "Deltarune",
		songs: [
			{name: "12am"},
			{name: "Lantern"},
			{name: "Dialtone"},
			{name: "NORTHERNLIGHT"},
		]
	},
	{name: "Celeste",
		songs: [
			{name: "Awake"},
			{name: "Prologue"},
		]
	}
];

const music = document.getElementById('music');
series.forEach((serie) => {
	let bigdiv = document.createElement('div');
	let p = document.createElement('p');
	p.textContent = serie.name;
	bigdiv.appendChild(p);
	bigdiv.appendChild(document.createElement('hr'));
	let smalldiv = document.createElement('div');
	smalldiv.className = 'grid columns-4';
	serie.songs.forEach((song) => {
		let myp = document.createElement('p');
		myp.textContent = song.name;
		smalldiv.appendChild(myp);
	});
	bigdiv.appendChild(smalldiv);
	music.appendChild(bigdiv);
});
