import { useState } from 'react';
import { CartContext } from '../CartContext';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado del carrito
    
    // Función para agregar un producto al carrito
    const handleAddToCart = (product, quantity) => {
        const existingProduct = cart.find((item) => item.id === product.id);// Buscar si el producto ya está en el carrito
        if (existingProduct) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            // Si el producto no está en el carrito, agregarlo con la cantidad seleccionada
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));// Eliminar producto del carrito
    };

    const handleUpdateQuantity = (productId, quantity) => {
        setCart(cart.map((item) =>
            item.id === productId
                ? { ...item, quantity }
                : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart, handleUpdateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
