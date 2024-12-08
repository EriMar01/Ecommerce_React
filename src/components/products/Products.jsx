import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';


const Products = ({ products, details, favorites, onAddRemoveFavorite }) => {
    const { page } = useParams();
    const { handleAddToCart } = useCart(); // Hook del carrito

    // Estado para manejar la cantidad de cada producto, usando un objeto
    const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
        acc[product.id] = 0; // Inicializa la cantidad de cada producto en 1
        return acc;
    }, {}));

    const increaseQuantity = (productId) => {
        setQuantities((prevQuantities) => {
            const newQuantity = prevQuantities[productId] + 1;
            const updatedQuantities = {
                ...prevQuantities,
                [productId]: newQuantity,
            };
            // Agregar al carrito directamente cuando se aumenta la cantidad
            handleAddToCart(products.find(p => p.id === productId), newQuantity);
            return updatedQuantities;
        });
    };


    const decreaseQuantity = (productId) => {
        setQuantities((prevQuantities) => {
            const currentQuantity = prevQuantities[productId];
    
            // Verificar que la cantidad sea mayor a 0 antes de disminuir
            if (currentQuantity > 0) {
                const newQuantity = currentQuantity - 1;
                const updatedQuantities = {
                    ...prevQuantities,
                    [productId]: newQuantity,
                };
    
                // Actualizar carrito también cuando se disminuye la cantidad
                handleAddToCart(products.find(p => p.id === productId), newQuantity);
                return updatedQuantities;
            } else {
                // Si la cantidad es 0 o menor, no hacer nada
                return prevQuantities;
            }
        });
    };
    
    return (
        <div className={styles.productsContainer}>
            {products.length > 0 ? (
                products.map((product) => {
                    // Verificar si el producto ya está en favoritos
                    const isFavorite = favorites.some((fav) => fav.id === product.id);

                    return (
                        <div className={styles.productCard} key={product.id}>
                            
                            {/* Corazón para agregar/eliminar de favoritos */}
                            <button
                                aria-label={`Toggle favorite for ${product.title}`}
                                className={`${styles.favoriteButton} ${isFavorite ? styles.filledHeart : ''}`}
                                onClick={() => onAddRemoveFavorite(product,page)}
                            >
                                {isFavorite ? '❤️' : '🤍'}
                            </button>


                            <img className={styles.productImage} src={product.image} alt={product.title} />
                            {/* Condicional para mostrar el título como Link o solo texto */}
                            {/* Hacer que cada producto sea un enlace a su ProductPage */}
                            {/* Mostrar el enlace solo si details es verdadero */}
                            {!details ? (
                                <Link to={`/products/${page}/${product.id}`} className={styles.productLink}>
                                    <h2 className={styles.productTitle}>{product.title}</h2>
                                </Link>
                            ) : (
                                <h2 className={styles.productTitle}>{product.title}</h2>
                            )}

                            <p className={styles.productPrice}><strong>Price:</strong> ${product.price}</p>
                            
                            {/* Mostrar detalles solo si "details" es verdadero */}
                            {details && (
                                <>
                                    <p className={styles.productCategory}><strong>Category:</strong> {product.category}</p>
                                    <p className={styles.productDescription}><strong>Description:</strong> {product.description}</p>
                                </>
                            )}

                            {/* Controles de cantidad */}
                            <div className={styles.quantityControls}>
                                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                <span>{quantities[product.id]}</span>
                                <button onClick={() => increaseQuantity(product.id)}>+</button>
                            </div>
                            
                        </div>
                    );
                })
            ) : (
                <p>No products to display</p> //no se si vaya o no
            )}
        </div>
    );
};

export default Products;
