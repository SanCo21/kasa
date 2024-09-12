		import Navigation from "/src/components/Nav";
		import logoImage from "../assets/images/logo.png";

		function Header() {
			return (
				<header className="header-banner">
					<img className="logo" src={logoImage} alt="logo de Kasa" />
					<Navigation />			
				</header>
			);
		}
		export default Header