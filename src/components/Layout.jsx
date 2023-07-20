import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { AuthProvider } from '../context/AuthContext';
import { DarkModeProvider } from '../context/DarkModeContext';

import '../styles/Layout.scss';

// Layout ist in der App.jsx ein Eltern Route Element für Home, About, Login und Profile
// Wann immer mit genesteten Routes gearbeitet wird, muss dann im Eltern Roue Element Outlet verwendet werden, damit die Kind Route Elemente gerendert werden

export const Layout = () => {


    return(
        <div className='Layout'>
            <DarkModeProvider>
                <AuthProvider>
                    <Navbar/> 
                    <Outlet />
                </AuthProvider>
            </DarkModeProvider>
        </div>
    )
}
