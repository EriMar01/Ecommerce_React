import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import styles from './ProtectedRoute.module.css';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLoggedIn, loading } = useAuth();

    const renderLoading = () => <p className={styles.authLooding}>Loading...</p>;

    const renderAuthWarning = () => (
        <div className={styles.authWarning}>
            <h1 className={styles.warningTitle}>You need to log in!</h1>
            <p className={styles.warningText}>
                Access to the profile page is restricted to authenticated users.
            </p>
            <div className={styles.authButtons}>
                <button
                    className={styles.ctaButton}
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
                <button
                    className={styles.ctaButton}
                    onClick={() => navigate("/")}
                >
                    Home
                </button>
            </div>
        </div>
    );

    // Mostrar estado de carga mientras se verifica la autenticación
    if (loading) return renderLoading();

    // Mostrar mensaje de advertencia si no está autenticado
    if (!isLoggedIn) return renderAuthWarning();

    // Renderizar el contenido protegido si está autenticado
    return children;
};

export default ProtectedRoute;

