import "../style.css"
const Header = () => {
    return(
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="https://github.com/vierivdco">Portafolio</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;