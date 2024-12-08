import { Link } from 'react-router-dom';  // Si estás usando React Router para la navegación
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <section className={styles.errorSection}>
                <h1 className={styles.errorTitle}>404</h1>
                <p className={styles.errorMessage}>Oops! The page you are looking for does not exist.</p>
                <Link to="/" className={styles.homeButton}>Back to Home</Link>
            </section>
        </div>
    );
};

export default NotFound;
