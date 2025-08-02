
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg mt-4">
                <div className="container-fluid nav-inner">
                    <Link className="navbar-brand" to="/">
                        <img src="src/assets/quick-clinic-logo.png" className='logo-img' alt="Quick Clinic" title="Quick Clinic"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/services">Sevices</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/doctors">Doctors</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link"to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;