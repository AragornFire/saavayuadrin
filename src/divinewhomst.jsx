import React from 'react';
import ReactDOM from 'react-dom/client';
import DivineWhomst from './pages/DivineWhomst.jsx';
import Body from './navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<Body content={<DivineWhomst />} />);