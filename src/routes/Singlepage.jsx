import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';

const aboutData = [
    {
        slug: 'about-app',
        title: 'die app',
        description: 'Diese Applikation ist eine To-Do App. Nach dem Einloggen können Aufgaben erstellt, gelöscht und bearbeitet werden und der Zugriff auf das Profil ist möglich. Der Code ist nicht komplett von mir selbst ausgedacht, mit Hilfe eines Tutorials hab ich diese App erstellt und eigene Anpassungen gemacht.'
    },

    {
        slug: 'about-developer',
        title: 'die entwicklerin',
        description: 'Hey ich bin Jana und in Ausbilung zur Junior Fullstack Webentwicklerin!'
    }
]

export const SinglePage = () => {
    const {isDarkMode} = useDarkModeContext();

    const { slug } = useParams();
    const aboutContent = aboutData.find((item) => item.slug === slug);
    const { title, description } = aboutContent;

    return(
        <div className={`About__wrapper__content ${isDarkMode ? 'dark' : ''}`}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
