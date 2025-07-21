import '../index.css'

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

function arrayFromDivChildrenId ( id ) {
	return (Array.from(document.getElementById(id).children));
}

function flipMe ( id ) {
	document.getElementById(id).classList.toggle("flipped");
}

function pickMe ( id ) {
	document.getElementById(id).classList.toggle("picked");
}

function shuffleArms(id) {
	const div = document.getElementById(id);
	const children = Array.from(div.children);
	for (let i = children.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[children[i], children[j]] = [children[j], children[i]];
	}
	children.forEach(child => div.appendChild(child));
}

function resetArms(id) {
	const children = arrayFromDivChildrenId(id);
	children.forEach((arm) => {
		arm.className = "arms";
	})
}

function pickArms(id) {
	resetArms(id);
	const children = arrayFromDivChildrenId(id);
	const randomItem = children[Math.floor(Math.random() * children.length)];
	pickMe(randomItem.id);
}

function clearArms(id) {
	const div = document.getElementById(id);
	const children = Array.from(div.children);

	children.forEach((child) => {child.classList.remove("flipped")});
}

function Arms ({ name, blazon }) {
	return (
		<div className={"arms"} id={name}>
			<img src={`src/assets/divinewhomst/${name}.png`} alt={blazon}></img>
			<h3>{name}</h3>
			<p>{blazon}</p>
			<div className={"flexbox gap-20"}>
				<button onClick={() => {flipMe(name)}}>Flip</button>
				<button onClick={() => {pickMe(name)}}>Pick</button>
			</div>
		</div>
	)
}

function DivineWhomst () {
	return (
		<div className={"flexbox gap-20"}>
			<div className={"grid columns-4"} id={"boxed"}>
				{arms.map(coatofarms => {
					return (<Arms name={coatofarms.name} blazon={coatofarms.blazon} />)
				})}
			</div>
			<div className={"floater"}>
				<h2>Welcome to Divine Whomst!</h2>
				<p>Pick a random coat of arms for the other to guess, using the blazon to clear up details if necessary</p>
				<div className={"flexbox gap-20"}>
					<button onClick={() => {shuffleArms("boxed")}}>Shuffle</button>
					<button onClick={() => {pickArms("boxed")}}>Auto Pick</button>
					<button onClick={() => {clearArms("boxed")}}>Clear Board</button>
					<button onClick={() => {resetArms("boxed")}}>New Game</button>
				</div>
			</div>
		</div>
	)
}

export default DivineWhomst;