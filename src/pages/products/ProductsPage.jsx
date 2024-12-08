import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Pagination from '../../components/pagination/Pagination';
import Products from '../../components/products/Products';
import styles from './ProductsPage.module.css';
import { useFavorites } from '../../hooks/useFavorites'; // Importamos el contexto
import { useCart } from '../../hooks/useCart';

const ProductsPage = () => {
    const {page} = useParams(); // Obtener el número de página desde la URL, por defecto es 1
    const currentPage = parseInt(page, 10); // Convertir la página a un número

    // Usamos el hook personalizado para obtener los productos y la información de paginación
    const { products, totalPages, loading } = useProducts(currentPage);

    // Accedemos al contexto para favoritos
    const { favorites, handleAddRemoveFavorite } = useFavorites();

    const { handleAddToCart } = useCart();

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Products Page</h1>

            {loading ? (
                <p className={styles.loading}>Loading Products...</p>
            ) : (
                <div className={styles.productsSection}>
                    <div className={styles.paginationContainer}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} />
                    </div>
                    
                    <div className={styles.productsList}>
                        <Products 
                            products={products} 
                            favorites={favorites} // Pasamos los favoritos al componente Products
                            onAddRemoveFavorite={handleAddRemoveFavorite} // Función para manejar agregar/eliminar favoritos
                            onAddToCart={handleAddToCart} 
                        />
                        
                    </div>
                    <div className={styles.paginationContainer}>
                        <Pagination currentPage={currentPage} totalPages={totalPages} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
