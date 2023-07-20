import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

// spezielle routen für nicht eingeloggte benutzer unzugänglich machen

export const ProtectedRoute = ( {children} ) => {

    const { user } = useAuthContext();
    const location = useLocation();

    if (!user) {
        return(
            <Navigate 
                to='/login'
                state={{ pathname: location.pathname }}
                replace
            />
        );
    }
    return children;
}
