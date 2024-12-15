import AuthService from '../services/authService';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Verificar el estado de autenticación al iniciar
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        const result = await AuthService.checkAuthStatus();
        if (result.success && result.isAuthenticated) {
            setUser({ email: result.email });
        }
    };

    const login = (email) => {
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