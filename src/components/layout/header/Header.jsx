import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Navbar from "../../navbar/Navbar";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" aria-label="Ir a la página principal">
                    <h1>My Store</h1> {/* Usamos un <h1> para mejorar la semántica y accesibilidad */}
                </Link>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;