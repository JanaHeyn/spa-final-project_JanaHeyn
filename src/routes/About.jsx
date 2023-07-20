import { NavLink, Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { useDarkModeContext } from '../context/DarkModeContext';
import '../styles/About.scss';

// Outlet = im Elternrpute verwenden, wenn es Kind-Routen gibt

export const About = () => {
    const {isDarkMode} = useDarkModeContext();

    return(
        <div className={`About ${isDarkMode ? 'dark' : ''}`}>
            <Header>
                <h1>About Page.</h1>
            </Header>

            <div className="About__wrapper">
                <ul className='About__wrapper__list'>
                    <li>
                        <NavLink to='about-app'>Über die App</NavLink>
                    </li>
                    <li>
                        <NavLink to='about-developer'>Über die Entwicklerin</NavLink>
                    </li>
                </ul>

                <Outlet />
            </div>
        </div>
    )
}
