import { useParams, Link } from 'react-router-dom'; // Usamos useParams para obtener el id del producto
import useProducts from '../../../hooks/useProducts'; // El hook personalizado que obtiene los productos
import styles from './ProductPage.module.css';
import { useFavorites } from '../../../hooks/useFavorites'; // Importamos el contexto
import { useCart } from '../../../hooks/useCart';
import { useState } from 'react';

const ProductPage = () => {
    const { page, id } = useParams(); // Obtener el ID del producto desde la URL

    // Usamos el hook personalizado para obtener todos los productos y la información de paginación
    const { products, loading } = useProducts(parseInt(page,10)); // Usamos página 1 para obtener los productos
    const { handleAddToCart } = useCart();
    const addToCartHandler = () => {
        if (quantity > 0) handleAddToCart(product, quantity);
    };
    const { favorites, handleAddRemoveFavorite } = useFavorites();

    // Estado para la cantidad del producto
    const [quantity, setQuantity] = useState(0);

    // Filtramos el producto que coincide con el ID
    const product = products?.find((prod) => prod.id === parseInt(id, 10));

    // Verificar si el producto está en favoritos
    const isFavorite = product && favorites.some((fav) => fav.id === product.id);

    // Función para aumentar la cantidad
    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    // Función para disminuir la cantidad
    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };
    
    if (loading) {
        return <p>Loading...</p>; // Si se están cargando los productos, mostramos un mensaje de carga
    }

    if (!product) {
        return <p>Product not found.</p>; // Si no encontramos el producto, mostramos un mensaje de "Producto no encontrado"
    }

    return (
        <div className={styles.productPage}>
            <div className={styles.productInfo}>
                <div className={styles.productImage}>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.productDetails}>
                    <div className={styles.titleContainer}>
                        <div className={styles.containerh1}><h1><strong>{product.title}</strong></h1></div>
                        <button
                            aria-label={`Toggle favorite for ${product.title}`}
                            className={`${styles.favoriteButton} ${isFavorite ? styles.filledHeart : ''}`}
                            onClick={() => handleAddRemoveFavorite(product,page)}
                        >
                            {isFavorite ? '❤️' : '🤍'}
                        </button>
                    </div>
                    
                    <p className={styles.productPrice}><strong>Price: </strong>${product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>

                    {/* Controles de cantidad */}
                    <div className={styles.quantityControls}>
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                        {/* Botón de añadir al carrito */}
                        <button onClick={addToCartHandler}>Add to Cart</button>
                        {/* Botón para agregar/eliminar de favoritos */}
                    </div>

                    <Link className={styles.backLink} to={`/products/${page}`}> Back to Products</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
