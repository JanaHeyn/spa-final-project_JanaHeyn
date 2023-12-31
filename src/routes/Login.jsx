import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Header } from '../components/Header';
import '../styles/Login.scss';

export const Login = () => {

    const [ username, setUsername ] = useState('');
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username) return;
        login(username);
        setUsername('');
        // anmelderoute wird im navigationsverlauf durch den angegebenen pfad ersetzt
        navigate(from, {replace: true});
    }

    return(
        <div className='Login'>

            <Header>
                <h1>Login.</h1>
            </Header>
            
            <div className="Login__wrapper">
                <form className='Login__wrapper__form' onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        placeholder='username'
                        value={username}
                        onChange={ (e) => setUsername(e.target.value)}
                    />
                    <button>Login</button>
                </form>
            </div> 
        </div>
    )
}
