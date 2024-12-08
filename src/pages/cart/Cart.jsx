import { useCart } from '../../hooks/useCart';
import styles from './Cart.module.css';
import { useNavigate } from "react-router";
import { useState} from 'react';

const Cart = () => {
    const navigate = useNavigate();
    const { cart, handleRemoveFromCart, handleUpdateQuantity } = useCart();

    // Calcular el total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Lógica de descuento
    const [discountCode, setDiscountCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    
    const applyDiscount = () => {
        const isValidCode = discountCode.length > 8 && /[a-zA-Z]/.test(discountCode) && /\d/.test(discountCode);
        if (isValidCode) {
            setDiscountAmount(total * 0.05); // Descuento del 5%
            setIsDiscountApplied(true); // Descuento aplicado
        } else {
            setDiscountAmount(0); // Sin descuento
            setIsDiscountApplied(false);
            alert("Invalid discount code");
        }
    };

    // Función para quitar el descuento
    const removeDiscount = () => {
        setDiscountAmount(0);
        setIsDiscountApplied(false); // Desactivar el descuento
        setDiscountCode(''); // Limpiar el código
    };

    // Precio de envío
    const shipping = total > 250 ? 0 : 15;

    // Descuento total con el envío aplicado
    const totalAfterDiscount = total - discountAmount;

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Your Cart</h1>
            {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                    <p>No items in the cart.</p>
                    <p>Let us help you fill it with what you like the most</p>

                    <div className={styles.emptyCartButtons}>
                        <button 
                            className={styles.ctaButton}
                            onClick={() => navigate(`/products/1`)}
                        >
                            Shop Now
                        </button>

                        <button 
                            className={styles.ctaButton}
                            onClick={() => navigate(`/`)}
                        >
                            Visit the home page
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li className={styles.encapsu} key={item.id}>
                                <div className={styles.imgEnc}>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className={styles.container}>
                                    <div className={styles.itemInfo}>
                                        <h3 className={styles.titlePrincipal}>{item.title}</h3>
                                        <p className={styles.itemPrice}>${item.price}</p>
                                    </div>
                                    
                                    {/* Botones para aumentar/disminuir cantidad */}
                                    <div className={styles.quantityControls}>

                                        <button 
                                            onClick={() => item.quantity > 1 && handleUpdateQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>

                                        <div>
                                            <p className={styles.itemNewPrice}>
                                                ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(item.price * item.quantity)}
                                            </p>
                                        </div>
                                        
                                        
                                    </div>
                                    <button className={`${styles.removeButtonBase} ${styles.removeButton}`} onClick={() => handleRemoveFromCart(item.id)}>X</button>

                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Resumen del pedido */}
                    <div className={styles.summary}>
                        <h3>Order Summary</h3>
                        <div className={styles.summaryRow}>
                            <span>{cart.length} Product(s)</span>
                            <span>{`USD $ ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(total)}`}</span>
                        </div>

                        {/* Envío */}
                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <span className={total > 250 ? styles.freeShipping : ''}>
                                {shipping === 0 ? 'FREE' : `USD $ ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(shipping)}`}
                            </span>
                        </div>

                        {/* SubTotal */}
                        {isDiscountApplied && (
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>{`USD $ ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(total + shipping)}`}</span>
                            </div>
                        )}

                        {/* Descuento */}
                        {isDiscountApplied && (
                            <div className={styles.summaryRow}>
                                <span>Discount (5%)</span>
                                <button 
                                    className={`${styles.removeButtonBase} ${styles.removeDiscountButton}`}
                                    onClick={removeDiscount}
                                >
                                    X
                                </button>
                                <span>{`- USD $ ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(discountAmount)}`}</span>
                            </div>
                        )}

                        {/* Total */}
                        <div className={styles.summaryRow}>
                            <span>Total</span>
                            <span className={styles.price}>
                                {`USD $ ${new Intl.NumberFormat('en-US', { style: 'decimal', maximumFractionDigits: 2 }).format(totalAfterDiscount + shipping)}`}
                            </span>
                        </div>

                        {/* Input para el código de descuento */}
                        {!isDiscountApplied && (
                            <div className={styles.discountContainer}>
                                <input 
                                    type="text" 
                                    placeholder="Enter discount code" 
                                    className={styles.discountInput}
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <button className={styles.ctaButtonDiscount} onClick={applyDiscount}>
                                    Apply
                                </button>
                            </div>
                        )}

                        {/* Botones para proceder al pago o continuar comprando */}
                        <button 
                            className={styles.ctaButton}
                            onClick={() => {}} 
                        >
                            Proceed to Checkout
                        </button>
                        <button 
                            className={styles.ctaButton}
                            onClick={() => navigate(`/products/1`)}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;