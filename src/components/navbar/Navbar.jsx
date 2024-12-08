//import { Link } from "react-router-dom"; // Importamos el componente 'Link' para navegar sin recargar la página.
import NavItem from './navItem/NavItem';
import styles from './Navbar.module.css';

const Navbar = () => {

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navList}>
				<NavItem to="/">Home</NavItem> {/* Enlace a la página de inicio */}
				<NavItem to="/about">About</NavItem> {/* Enlace a la página de "Acerca de" */}
				<NavItem to="/products/1">Products</NavItem> {/* Enlace a la página de productos */}
				<NavItem to="/cart">Cart</NavItem> {/* Enlace a la página del carrito */}
				<NavItem to="/favorite">Favorite</NavItem>{/* Enlace a la página de productos favoritos */}
				<NavItem to="/profile">Profile</NavItem> {/* Enlace a la página de perfil del usuario */}
			</ul>
		</nav>
	);
};

export default Navbar;



// ¿Qué es un Navbar?
// Un Navbar (barra de navegación) es un componente de la interfaz de usuario que contiene enlaces o botones que permiten la 
// navegación entre las diferentes secciones o páginas de la aplicación. Suele estar ubicado en la parte superior de la página, 
// aunque también puede colocarse en otras ubicaciones, como los laterales.

// El Navbar contiene enlaces (Link) que permiten al usuario navegar entre las rutas de la aplicación sin recargar la página (gracias a React Router).