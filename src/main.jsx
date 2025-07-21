import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Body from './navigation.jsx'

createRoot(document.getElementById('root')).render(
    <Body content={<Home />} />
)
