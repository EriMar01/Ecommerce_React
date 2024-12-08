import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = ({ to, children }) => {
    return (
        <li className={styles.navItem}>
            <NavLink //NavLink: Es el reemplazo adecuado para Link cuando se necesita aplicar una clase CSS cuando el enlace está activo.
                to={to}
                className={({ isActive }) => (isActive ? styles.active : '')} //Solo necesita recibir dos props: to (para la ruta) y children (el contenido del enlace).
            >
                {children}
            </NavLink>
        </li>
    );
};

export default NavItem;
