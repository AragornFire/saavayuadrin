import React from 'react';
import ReactDOM from 'react-dom/client';
import Music from './pages/Music.jsx';
import Body from './navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<Body content={<Music />} />);