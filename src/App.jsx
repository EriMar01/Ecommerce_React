import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Favorites from "./pages/favorites/Favorites";
import ProductsPage from "./pages/products/ProductsPage";
import ProductPage from "./pages/products/product/ProductPage";
import Profile from "./pages/profile/Profile";
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Layout from "./components/layout/Layout";
import NotFound from './pages/notFound/NotFound';
import {FavoritesProvider} from './context/providers/FavoritesProvider';
import {CartProvider} from './context/providers/CartProvider';
import {AuthProvider} from './context/providers/AuthProvider';
import Login from './pages/login/Login';

function App() {

  return (
    <AuthProvider>
      <FavoritesProvider> {/* Proveedor envolviendo toda la aplicación */}
        <CartProvider>
          <BrowserRouter>
            <Routes>
              {/* Ruta principal */}
              <Route path="/" element={<Layout><Home /></Layout>} />

              {/* Rutas estáticas */}
              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/cart" element={<Layout><Cart /></Layout>} />
              <Route path="/favorite" element={<Layout><Favorites /></Layout>} />
              <Route path="/login" element={<Layout><Login /></Layout>} />

              {/* Ruta dinámica para productos */}
              <Route path="/products/:page" element={<Layout><ProductsPage /></Layout>} />
              <Route path="/products/:page/:id" element={<Layout><ProductPage /></Layout>} />

              {/* Rutas protegidas */}
              <Route
                  path="/profile"
                  element={
                      <ProtectedRoute> 
                        <Layout><Profile /></Layout>
                      </ProtectedRoute>
                  }
                />
              {/* Ruta 404 para páginas no encontradas */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </BrowserRouter>
        </CartProvider>
    </FavoritesProvider>
    </AuthProvider>
  );
}

export default App


// Resumen de los Archivos

// Home.jsx:
// Este es el componente principal de la página de inicio.
// Contiene un mensaje de bienvenida y agrega las secciones de productos, testimonios y suscripción.

// Cart.jsx:
// Componente que representa la página del carrito de compras.
// Incluye un enlace de navegación a un perfil dentro del carrito.

// About.jsx:
// Componente que representa la página "Acerca de nosotros", con secciones sobre misión, valores y una llamada a la acción para realizar compras.

// useProducts.jsx:
// Un hook que obtiene productos de una base de datos o API.
// Maneja la paginación de productos con estados para los productos actuales, el total de páginas y el estado de carga.

// index.js:
// Contiene la función getData para realizar la llamada a la API de productos (FakeStoreAPI), obteniendo los datos de los productos.

// TestimonialSection.jsx:
// Sección que muestra testimonios de clientes, cada uno con una evaluación de 5 estrellas.

// Subscribe.jsx:
// Formulario de suscripción a un boletín de noticias. Permite a los usuarios ingresar su correo electrónico.

// ProtectedRoute.jsx:
// Componente que controla las rutas protegidas para asegurar que solo los usuarios autenticados puedan acceder a ciertas páginas.

// Products.jsx:
// Muestra una lista de productos, cada uno con una opción para agregar a favoritos y un enlace a la página de detalles.

// Pagination.jsx:
// Componente para controlar la paginación de los productos, con botones de "Previous" y "Next" para navegar entre páginas de productos.

// NavItem.jsx:
// Componente para un solo enlace de navegación (dentro de un navbar), que utiliza NavLink para aplicar una clase activa al enlace cuando está seleccionado.

// Navbar.jsx:
// Contiene la barra de navegación principal, con enlaces a las páginas de inicio, acerca de, productos, carrito, favoritos y perfil.

// Layout.jsx:
// Componente de diseño principal que incluye el Header y Footer, y renderiza el contenido de la página principal (children).

// Header.jsx:
// Componente para el encabezado de la página, que incluye el logo de la tienda y la barra de navegación.

// Footer.jsx:
// Componente para el pie de página, que incluye íconos sociales y derechos de autor.
