import logoFooter from "../assets/images/logo_black.png";

function Footer() {
    return (
        <footer className="footer-banner">
            <img src={logoFooter} alt="logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;