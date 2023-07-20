import { Routes, Route } from 'react-router-dom';
import { About } from './routes/About';
import { Home } from './routes/Home';
import { Profile } from './routes/Profile';
import { Login } from './routes/Login';
import { NoMatch } from './routes/NoMatch';
import { Layout } from './components/Layout';
import { SinglePage } from './routes/Singlepage';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.scss';

const App = () => {

    return(
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='about' element={<About />}>
                    <Route path=':slug' element={<SinglePage />}/>
                </Route>
                <Route path='login' element={<Login />}/>
                <Route 
                    path='profile' 
                    element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                    }
                />
                <Route path='*' element={<NoMatch />}/>
            </Route>
        </Routes>
    )
}

export default App
