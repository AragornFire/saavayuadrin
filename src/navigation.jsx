import './index.css'

function Navigation () {
	return (
		<nav>
			<a className={"navbox"} href="/">Home</a>
			<a className={"navbox"} href="/armorial/">Armorial</a>
			<a className={"navbox"} href="/music/">Music</a>
			<a className={"navbox"} href="/divinewhomst/">Divine Whomst</a>
		</nav>
	);
}

function Body ({ content }) {
	return (
		<div className={"container"}>
			<div>
				<div className={"flexbox padding-top-5"}>
					<Navigation />
				</div>
				<hr />
				{content}
			</div>
		</div>
	)
}

export default Body;