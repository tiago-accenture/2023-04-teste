import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './home/Home';
import Error from './error/Error';
import Navigation from './navigation/Navigation';
import Fornecedor from './fornecedor/Fornecedor';
import Empresa from './empresa/Empresa';

function App() {
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
		<BrowserRouter>
			<div className="container">
				<div className="sidebar">
					<Navigation />
				</div>
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/fornecedor" element={<Fornecedor />} />
						<Route path="/empresa" element={<Empresa />} />
						<Route element={<Error />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
