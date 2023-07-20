import { Header } from '../components/Header';
import { useAuthContext } from '../context/AuthContext';
import { useDarkModeContext } from '../context/DarkModeContext';
import useravatar from '../assets/avatar2_unsplash.jpg';
import '../styles/Profile.scss';

export const Profile = () => {

    const { user } = useAuthContext();
    const { isDarkMode, handleDarkMode } = useDarkModeContext();

    return(
        <div className={`Profile ${isDarkMode ? 'dark' : ''}`}>
            <Header>
                <h1>Profile page.</h1>
            </Header>
            
            <div className="Profile__content">
                <h2>Hello, <span>{user}</span></h2>
                
                <img src={useravatar} alt='useravatar'/>

                <p>Das sind deine offenen Aufgaben:</p>

                <div className="Profile__content__switch">
                    <p>Darkmode</p>
                    <button onClick={handleDarkMode}>
                        {isDarkMode ? 'an.' : 'aus.'}
                    </button>
                </div>
            </div>
        </div>
    )
}
