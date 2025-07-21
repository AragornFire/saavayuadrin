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
]

function Song ({ name }) {
	return (
		<p>{name}</p>
	)
}

function Series ({ name, songs }) {
	return (
		<div>
			<p>{name}</p>
			<hr/>
			<div className={"grid columns-4"}>
				{songs.map(song => {
					return (<Song name={song.name} />)
				})}
			</div>
		</div>
	)
}

function Music () {
	return (
		<div>
			{series.map(seri => {
				return (<Series name={seri.name} songs={seri.songs} />)
			})}
		</div>
	)
}

export default Music;
