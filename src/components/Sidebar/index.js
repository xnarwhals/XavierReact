import './index.scss';
import LogoX from '../../assets/images/logo-x.png';
import LogoSubtitle from '../../assets/images/logo_subx.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase, faBars} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub, faYoutube, faItchIo} from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const isMobile = window.innerWidth < 768;


    return (
        <div className='nav-bar'>
            <Link className="logo" to="/" onClick={() => setShowNav(false)}>
                <img src={LogoX} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Xavier" />
            </Link>
            <nav className={showNav ? 'show-bar' : ''}>
                <NavLink exact="true" activeClassName="active" to ="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
                </NavLink>
                <NavLink exact="true" activeClassName='about-link' to ="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>
                <NavLink exact="true" activeClassName='contact-link' to ="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>
                <NavLink exact="true" activeClassName='portfolio-link' to = {isMobile ? "/quick-portfolio" : "/portfolio"} onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4d" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/xaviergonzalez32/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/xavier_xgi/'>
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/xnarwhals'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@XGFilm'>
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4d" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://xnarwhals.itch.io'>
                        <FontAwesomeIcon icon={faItchIo} color="#4d4d4d" />
                    </a>
                </li>
            </ul>
            <a className="bars-holder" onClick={() => setShowNav(!showNav)}>
                <FontAwesomeIcon 
                    className={`hamburger-icon ${showNav ? 'active' : ''}`}
                    icon={faBars}
                    color="#ffd700"
                />
            </a>
     
        </div>
    )
}

export default Sidebar;