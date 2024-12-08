import { useState } from 'react';
import { FavoritesContext } from '../FavoritesContext';

//Un provider es el componente que envuelve a tus componentes principales y les permite acceder a los valores del contexto. 
// maneja el estado y proporciona el contexto a los componentes hijos.

export const FavoritesProvider = ({ children }) => {
    // Estado para los productos favoritos
    const [favorites, setFavorites] = useState([]);

    const handleAddRemoveFavorite = (product, page) => {
        // Si el producto ya está en favoritos, lo eliminamos
        console.log("Favorito: ", favorites)
        console.log("productId: ",product.id)
        console.log("if: ",favorites.find((fav) => fav.id === product.id))
        console.log("filter: ",favorites.filter((fav) => fav.id !== product.id))

        if (favorites.find((fav) => fav.id === product.id)) {
            setFavorites([...favorites.filter((fav) => fav.id !== product.id)]);
            
            console.log("wtf: ",  [...favorites.filter((fav) => fav.id !== product.id)])
        } else {
            // Si no está en favoritos, lo agregamos
            // setFavorites([...favorites, { ...product, page, id }]);
            setFavorites( (prev) => {
                const updatedFavorites = [...prev, { ...product, principalPage: page }];
                return updatedFavorites;
            });
            console.log("favElse: ", favorites)
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, handleAddRemoveFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
