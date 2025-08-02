
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return(
        <header>
            <nav class="navbar navbar-expand-lg mt-4">
                <div class="container-fluid nav-inner">
                    <Link class="navbar-brand" to="/">
                        <img src="src/assets/quick-clinic-logo.png" className='logo-img' alt="Quick Clinic" title="Quick Clinic"/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggler">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/services">Sevices</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/doctors">Doctors</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link"to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;