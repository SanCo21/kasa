
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Header from "./components/Header";
import FicheLogement from "./pages/Fiche-Logement";
// import Footer from "./components/Footer";
import Error from "./pages/Error";
import './styles/main.scss';

// function App() {
// 	return (
// 		<div className="App">
// 			<Header />
// 			<main>
// 				<Routes>          
// 					<Route path="/" element={<Home />} />
// 					<Route path="/about" element={<About />} />
// 					<Route path="/logement/:id" element={<FicheLogement />} />
// 					<Route path="*" element={<Error />} />
// 				</Routes>
// 			</main>
// 			<Footer />
// 		</div>
// 	);
// }

// export default App;

function App() {
	return (
		<div className="App">			
				<Routes>          
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
				</Routes>			
		</div>
	);
}

export default App;
