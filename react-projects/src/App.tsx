import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

import HackerNewsApp from './hackernews/HackerNewsApp';
import Home from './home/Home';


function App() {
	  
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/hackernews" element={<HackerNewsApp />} />
		</Routes>
	)
}

export default App
