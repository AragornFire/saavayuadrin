import '../index.css'

const arms = [
	{name: "Saava", href: "src/assets/saava.png", blazon: "Gules, a saltire raguly argent, a lion rampant holding a latin cross patty fitchy or."},
	{name: "Klagarn", href: "src/assets/klagarnf.png", blazon: "Azure, a fess embattled counterembattled or, five roundels in cross counterchanged."},
	{name: "Shredge", href: "src/assets/shredge.png", blazon: "Sable, a castle argent, on a chief barry wavy azure and argent a label gules."},
	{name: "Grass", href: "src/assets/grass.png", blazon: "Argent, a bend bretessed vert, in sinister chief a bird volant purpure."},
	{name: "Dughorm", href: "src/assets/dughorm.png", blazon: "Azure, on a heart argent three flames gules."},
	{name: "Corvus", href: "src/assets/corvus.png", blazon: "Sable, in chief a branch with three cinquefoils or."},
	{name: "Aemdal", href: "src/assets/aemdal.png", blazon: "Vert, between six firesteels or a bend cotised fleury to chief and erable to base argent."},
	{name: "Kat", href: "src/assets/bigkatf.png", blazon: "Per bend purpure and gules, between two roses a bend wavy argent charged with an ear of wheat counterchanged by the field."},
	{name: "Mike", href: "src/assets/mike.png", blazon: "Argent, a lion rampant sable armed and langued gules, on a bend azure three fleur-de-lis argent."},
];

function Arms ({ name, image, blazon }) {
	return (
		<div className={"arms"}>
			<img src={image} alt={blazon}></img>
			<h3>{name}</h3>
			<p>{blazon}</p>
		</div>
	)
}

function Armorial () {
	return (
		<div className={"grid"}>
			{arms.map(coatofarms => {
				return (<Arms name={coatofarms.name} image={coatofarms.href} blazon={coatofarms.blazon} />)
			})}
		</div>
	)
}

export default Armorial;