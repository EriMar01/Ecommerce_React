import { Link } from 'react-router-dom'; 
import { useFavorites } from '../../hooks/useFavorites'; // Importamos el contexto
import styles from './Favorites.module.css';

const Favorites = () => {
    const { favorites, handleAddRemoveFavorite } = useFavorites(); // Accedemos al contexto

    return (
        <div className={styles.userFavorites}>
            <h2 className={styles.sectionTitle}>My Favorites</h2>
            <div className={styles.container}>
                {favorites.length > 0 ? (
                    <ul className={styles.favoritesList}>
                        {favorites.map((product) => (
                            <li className={styles.favoriteItem} key={product.id}>
                                {/* Imagen del producto */}
                                <img className={styles.productImage} src={product.image} alt={product.title} />

                                 {/* Título del producto */}
                                <Link 
                                    to={`/products/${product.principalPage || 1}/${product.id}`} 
                                    className={styles.productTitleLink}
                                >
                                    <h3>{product.title}</h3>
                                </Link>

                                {/* Precio y botón X */}
                                <div className={styles.priceandRemote}>
                                    <p><strong>Price:</strong> ${product.price}</p>

                                    <button 
                                        className={styles.remotefavoriteButton}
                                        onClick={() => handleAddRemoveFavorite(product)}
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.emptyFavorite}>No favorites added yet.</p>
                )}
                {/* Botones debajo del mensaje */}
                <div className={styles.menuFavorite}>
                    <Link to="/profile" className={styles.backtoProfile}>Back to Profile</Link>
                    <Link to="/products/1" className={styles.backtoProfile}>Back to Products</Link>
                </div>
            </div>
        </div>
    );
};

export default Favorites;
