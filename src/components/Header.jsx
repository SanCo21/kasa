import { Link } from 'react-router-dom';
import Navigation from "/src/components/Nav";
import logoImage from "../assets/images/logo.png";

function Header() {
	return (
		<header className="header-banner">
			<Link to="/">
				<img className="logo" src={logoImage} alt="logo de Kasa" />
			</Link>	
			<Navigation />	
				
		</header>
	);
}

export default Header