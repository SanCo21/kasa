
import Navigation from "/src/components/Nav";

function Header() {
	return (
		<header className="header-banner">
			<img className="logo" src="src/assets/images/logo.png" alt="logo de Kasa" />
			<Navigation />			
		</header>
	);
}
export default Header