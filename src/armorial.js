const arms = [
	{name: 'Saava', href: 'saava', blazon: 'Gules, a saltire raguly argent, a lion rampant holding a latin cross patty fitchy or.'},
	{name: 'Klagarn', href: 'klagarnf', blazon: 'Azure, a fess embattled counterembattled or, five roundels in cross counterchanged.'},
	{name: 'Shredge', href: 'shredge', blazon: 'Sable, a castle argent, on a chief barry wavy azure and argent a label gules.'},
	{name: 'Grass', href: 'grass', blazon: 'Argent, a bend bretessed vert, in sinister chief a bird volant purpure.'},
	{name: 'Dughorm', href: 'dughorm', blazon: 'Azure, on a heart argent three flames gules.'},
	{name: 'Corvus', href: 'corvus', blazon: 'Sable, in chief a branch with three cinquefoils or.'},
	{name: 'Aemdal', href: 'aemdal', blazon: 'Vert, between six firesteels or a bend cotised fleury to chief and erable to base argent.'},
	{name: 'Kat', href: 'bigkatf', blazon: 'Per bend purpure and gules, between two roses a bend wavy argent charged with an ear of wheat counterchanged by the field.'},
	{name: 'Mike', href: 'mike', blazon: 'Argent, a lion rampant sable armed and langued gules, on a bend azure three fleur-de-lis argent.'},
	{name: 'Heraldry Community (Discord, Reddit)', href: 'heraldry', blazon: 'Per saltire gules and azure, between two bees in fess proper and two escutcheons in pale a fret argent.'},
	{name: 'Gecktron', href: 'geck', blazon: 'Argent, beneath a rainbow gules, or, and azure a mullet of six sable.'},
	{name: 'kaTokot', href: 'katokot', blazon: 'Sable, an ermine spot or.'},
	{name: 'Toni', href: 'toni', blazon: 'Azure, an anteater rampant argent armed and langued or.'},
	{name: 'Tourment', href: 'tourment', blazon: 'Azure, a cockatrice displated or holding a key argent.'},
	{name: 'Vaakkuna', href: 'vaakkuna', blazon: 'Or, beneath a chief nebuly a duck sable armed, langued, and beaked gules.'},
];

const armorial = document.getElementById('armorial');
arms.forEach((arm) => {
	let bigdiv = document.createElement('div');
	bigdiv.className = 'arms';
	let img = document.createElement('img');
	img.src = `./src/assets/${arm.href}.png`;
	img.alt = arm.blazon;
	bigdiv.appendChild(img);
	let h3 = document.createElement('h3');
	h3.textContent = arm.name;
	bigdiv.appendChild(h3);
	let p = document.createElement('p');
	p.textContent = arm.blazon;
	bigdiv.appendChild(p);
	armorial.appendChild(bigdiv);
});
