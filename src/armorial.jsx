import React from 'react';
import ReactDOM from 'react-dom/client';
import Armorial from './pages/Armorial.jsx';
import Body from './navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<Body content={<Armorial />} />);