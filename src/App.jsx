
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FicheLogement from "./pages/Fiche-Logement";
import Error from "./pages/Error";
import './styles/main.scss';



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
