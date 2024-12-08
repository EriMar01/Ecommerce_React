import { useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyAuth = async () => {
            setLoading(true); // Asegura que la carga comience
            const token = await new Promise((resolve) => 
                setTimeout(() => resolve(sessionStorage.getItem("token")), 3000) // Simula un retraso
            );
            if (token) {
                setIsLoggedIn(true);
            }
            setLoading(false); // Finaliza la carga
        };
    
        verifyAuth();
    }, []);
    

    const handleLogin = (token) => {
        setIsLoggedIn(true);
        sessionStorage.setItem("token", token);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                loading,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
