
import Navigation from "/src/components/Nav";

function Header() {
	return (
		<header className="header-banner">
			<div className="header-banner__img">
				<img className="logo" src="src/assets/images/logo.png" alt="logo de Kasa" />
			</div>
			<div className="header-banner__nav">
				<Navigation />
			</div>
		</header>
	);
}
export default Header