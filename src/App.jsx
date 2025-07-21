import {useState, useEffect} from "react";
import './index.css'
import Home from './pages/Home.jsx'
import Armorial from './pages/Armorial.jsx'
import Music from './pages/Music.jsx'
import DivineWhomst from './pages/DivineWhomst.jsx'

function Navigation ({ navfunc }) {
    return (
        <nav>
            <button className={"navbox"} onClick={() => navfunc('/')}>Home</button>
            <button className={"navbox"} onClick={() => navfunc('/armorial')}>Armorial</button>
            <button className={"navbox"} onClick={() => navfunc('/music')}>Music</button>
            <button className={"navbox"} onClick={() => navfunc('/divinewhomst')}>Divine Whomst</button>
        </nav>
    )
}

function Pages ({ content, navfunc }) {
    return (
        <div>
            <div className={"flexbox padding-top-5"}>
                <Navigation navfunc={navfunc}/>
            </div>
            <hr />
            <h1>{content.title}</h1>
            {content.content}
        </div>
    )
}

function App () {
    const pages = [
        { path: 'home', title: 'Home', content: <Home />},
        { path: 'armorial', title: 'Armorial', content: <Armorial />},
        { path: 'music', title: 'Music', content: <Music />},
        { path: 'divinewhomst', title: 'Divine Whomst', content: <DivineWhomst />},
    ];

    const [page, setPage] = useState('home');
    const navigate = (to) => {
        window.location.hash = to;
    };

    useEffect(() => {
        const onHashChange = () => {
            const path = window.location.hash.replace('#/', '');
            setPage(path || 'home');
        };
        window.addEventListener('hashchange', onHashChange);
        onHashChange();
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    let content;
    switch (page) { // Switch statements are so cool
        case 'home': content = pages[0]; break;
        case 'armorial': content = pages[1]; break;
        case 'music': content = pages[2]; break;
        case 'divinewhomst': content = pages[3]; break;
        default: content = {path: 'error', title: 'Not Found', content: 'Page not found'};
    } // Interestingly, I don't think the error will ever be called,
    // since the only way to do so is to have a broken button.
    // The page reloads every time the user manually updates the URL,
    // which makes `page` use its default values of 'home' as `navigate()` doesn't get called.

    useEffect(() => {
        document.title = content.title;
    }, [content]);

    return (
        <div className={"container"}>
            <Pages content={content} navfunc={navigate} />
        </div>
    )
}

export default App;
