import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h2 className="logo">ReactLanding</h2>

                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="btn">
                            Get Started
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
