const arms = [
	{name: 'Whitaker',      blazon: 'Gules, a fess argent'},
	{name: 'Hawthorne',     blazon: 'Azure, a lion argent'},
	{name: 'Radcliffe',     blazon: 'Sable, a pale or'},
	{name: 'Ellington',     blazon: 'Vert, a fleur-de-lis or'},
	{name: 'Pennington',    blazon: 'Or, a tree gules'},
	{name: 'Hargreaves',    blazon: 'Or, a chief azure'},
	{name: 'Weatherby',     blazon: 'Argent, a bend sable'},
	{name: 'Ashford',       blazon: 'Argent, a roundel vert'},
	{name: 'Kingsley',      blazon: 'Per pale argent and gules, a chief or'},
	{name: 'Langley',       blazon: 'Per pale azure and or, a bend gules'},
	{name: 'Hollingsworth', blazon: 'Per fess argent and sable, a roundel azure'},
	{name: 'Templeton',     blazon: 'Per fess vert and or, a fess argent'},
	{name: 'Wainwright',    blazon: 'Per bend or and gules, a lion vert'},
	{name: 'Beckwith',      blazon: 'Per bend azure and argent, a tree or'},
	{name: 'Chatsworth',    blazon: 'Per chevron or and sable, a fleur-de-lis argent'},
	{name: 'Underwood',     blazon: 'Per chevron vert and argent, a pale sable'},
];

function arrayFromDivChildrenId (id) {
	return (Array.from(document.getElementById(id).children));
}

function flipMe (id) {
	document.getElementById(id).classList.toggle("flipped");
}

function pickMe (id) {
	document.getElementById(id).classList.toggle("picked");
}

function shuffleArms (id) {
	const div = document.getElementById(id);
	const children = Array.from(div.children);
	for (let i = children.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[children[i], children[j]] = [children[j], children[i]];
	}
	children.forEach(child => div.appendChild(child));
}

function resetArms (id) {
	const children = arrayFromDivChildrenId(id);
	children.forEach((arm) => {
		arm.className = "arms";
	})
}

function pickArms (id) {
	resetArms(id);
	const children = arrayFromDivChildrenId(id);
	const randomItem = children[Math.floor(Math.random() * children.length)];
	pickMe(randomItem.id);
}

function clearArms (id) {
	const children = arrayFromDivChildrenId(id);
	children.forEach((child) => {child.classList.remove("flipped")});
}

const boxed = document.getElementById('boxed');
arms.forEach((arm) => {
	let bigdiv = document.createElement('div');
	bigdiv.className = "arms";
	bigdiv.id = arm.name;
	let img = document.createElement('img');
	img.src = `./src/assets/divinewhomst/${arm.name}.png`;
	img.alt = arm.blazon;
	bigdiv.appendChild(img);
	let h3 = document.createElement('h3');
	h3.textContent = arm.name;
	bigdiv.appendChild(h3);
	let p = document.createElement('p');
	p.textContent = arm.blazon;
	bigdiv.appendChild(p);
	let smalldiv = document.createElement('div')
	smalldiv.className = "flexbox gap-20";
	let b1 = document.createElement('button');
	b1.onclick = () => {flipMe(arm.name)};
	b1.textContent = 'Flip'
	smalldiv.appendChild(b1);
	let b2 = document.createElement('button');
	b2.onclick = () => {pickMe(arm.name)};
	b2.textContent = 'Pick'
	smalldiv.appendChild(b2);
	bigdiv.appendChild(smalldiv);
	boxed.appendChild(bigdiv);
});
