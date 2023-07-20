import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { useAuthContext } from '../context/AuthContext';
import { useDarkModeContext } from '../context/DarkModeContext';
import '../styles/Home.scss';


export const Home = () => {
    const {isDarkMode} = useDarkModeContext();

    // conditional rednering für task anzeige und erläuterung
    const { user } = useAuthContext();

    return(
        <div className={`Home ${isDarkMode ? 'dark' : ''}`}>
            <Header>
                <h1>Todos.</h1>
                { !user && (
                    <p>Bitte logge dich ein, um die To-Do Liste zu sehen</p>
                )}

                { user && 
                (
                    <div className="text">
                        <p>Füge neue Aufgaben mit der Plus Taste hinzu oder drücke die Enter Taste.</p>
                        <p>Zum Bestätigen der Änderung die Enter Taste drücken.</p>
                    </div>
                )}
                
            </Header>

            { user && (
                <Content />
            )}
        </div>


    )
}
