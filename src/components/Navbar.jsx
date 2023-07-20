import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useDarkModeContext } from '../context/DarkModeContext';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi'
import '../styles/Navbar.scss';

const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
  ];

export const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();

    // Navbar schließen, wenn audßerhalb der navbar geklickt wird
    const ref = useRef();

    const { isDarkMode } = useDarkModeContext();

    useEffect(() => {
        const handler = (e) => {
            if(navbarOpen && ref.current && !ref.current.contains(e.target)) {
                setNavbarOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [navbarOpen]);

    const handleLogout = () => {
        logout();
        // nach logout wird man zum login fenster geleitet
        navigate('/login');
    }

    return(
        <div className={`Navbar ${isDarkMode ? 'dark' : ''}`}>
            <nav ref={ref} className='Navbar__left'>
                {/* hamburger menu button */}
                <button 
                    className='Navbar__left__menu-toggle'
                    onClick={() => setNavbarOpen((prev) => !prev)}
                >
                    {navbarOpen ? (
                        <MdClose style={{ width: '32px', height: '32px' }} />
                    ): (
                        <FiMenu style={{ width: '32px', height: '32px' }} />
                    )}
                </button>
                
                {/*Inhalt der navbar*/}
                <ul className={`Navbar__left__menu-nav ${navbarOpen ? 'show-menu' : ''}`}>
                    {
                        links.map((link) => {
                            return(
                                <React.Fragment key={link.text}>
                                    {link.path === 'login' ? 
                                        (
                                            !user && 
                                            (
                                                <li>
                                                    <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>{link.text}</NavLink>
                                                </li>
                                            )
                                        )
                                        :
                                        link.path === 'profile' ? 
                                        (
                                            user && 
                                            (
                                                <li>
                                                    <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>{link.text}</NavLink>
                                                </li>
                                            )
                                        )
                                        :
                                        (
                                            <li>
                                                <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>{link.text}</NavLink>
                                            </li>
                                        )}
                                </React.Fragment>                        
                            );
                        })}
                        
                        {!user && 
                        (
                            <li className='Navbar__left__menu-nav__log-in'>
                                <span>Du bist nicht eingeloggt!</span>
                            </li>
                        )}
                </ul>
            </nav>

            {/* Logout Button*/}
            {
                user && (
                    <div className='Navbar__right__logout'>
                        <p>{ user }</p>
                        {<button onClick={handleLogout}>logout</button>}
                    </div>
            )}

        </div>
    );
};
