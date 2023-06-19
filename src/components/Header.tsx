import MainLogo from "./MainLogo";
import { Link,useLocation } from "react-router-dom";


function Header() {
    //Use useLocation Hook to check if we are on Home or About Page for underline the corresponding nav link (see JSX)
    const { pathname }: { pathname: string } = useLocation();

    return (<header>
        <MainLogo />

        <nav>
            <Link to="/" className={`nav-link ${pathname === '/' ? 'nav-link--active' : ''}`} >Accueil</Link>
            <Link to="/about" className={`nav-link ${pathname === '/about' ? 'nav-link--active' : ''}`} >À Propos</Link>
        </nav>
    </header>);
}

export default Header;