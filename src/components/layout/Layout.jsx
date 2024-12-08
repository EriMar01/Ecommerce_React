import Header from './header/Header';
import Footer from './footer/Footer';


function Layout({children}) {
	return (
		<div>
            <Header />
                {children} {/* El contenido de la página actual se renderiza aquí */}
            <Footer />
        </div>
	);
}
export default Layout;

// ¿Qué es un Layout?
// El Layout en una aplicación web es el diseño general o la estructura común que se utiliza en varias páginas de la aplicación. 
// Un Layout define cómo se organizan los elementos principales de la interfaz, como encabezados (headers), barras de navegación (navbars), 
// pies de página (footers), y el contenido principal.

// El propósito del Layout es evitar la repetición de estas estructuras comunes en cada página. En lugar de colocar un Navbar y un footer 
// en cada componente de la página, los puedes incluir en un Layout global y luego agregar el contenido único de cada página utilizando la propiedad children.