import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AuthService from '../service/authService';

interface AuthContextProps{
    user: User | null,
    login: (email: string) => void,
    logout: () => Promise<void>,
}
const AuthContext = createContext<AuthContextProps | null>(null);

interface User{
    email: string
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Verificar el estado de autenticación al iniciar
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        const result = await AuthService.checkAuthStatus();
        if (result.success && result.isAuthenticated && result.email) {
            setUser({ email: result.email });
        }
    };

    const login = (email : string) => {
        setUser({ email });
    };

    const logout = async () => {
        const result = await AuthService.logout();
        if (result.success) {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;