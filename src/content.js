const url = window.location.href;
const root = document.getElementById('root');

pages = [
	{text: 'Home', href: './index.html'},
	{text: 'Armorial', href: './armorial.html'},
	{text: 'Music', href: './music.html'},
	{text: 'Divine Whomst', href: './divinewhomst.html'},
];
// Prepare the nav
const nav = document.getElementsByTagName('nav')[0];
pages.forEach((page) => {
	let atag = document.createElement('a');
	atag.className = "navbox";
	atag.href = page.href;
	atag.textContent = page.text;
	nav.appendChild(atag);
});
