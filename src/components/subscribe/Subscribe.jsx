import { useState } from 'react';
import styles from './Subscribe.module.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (event) => {
        event.preventDefault();
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setIsSubscribed(true);
            alert(`Thank you for subscribing!, ${email}!`);
        } else {
            alert("Please enter a valid email!");
        }
    };

    return (
        <section className={styles.cta}>
            <div className={styles.ctaContent}>
                <h2>Subscribe for Exclusive Deals!</h2>
                <p>Sign up for our newsletter and get the latest offers directly in your inbox.</p>
                {!isSubscribed ? (
                    <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                        <input 
                            type="email" 
                            className={styles.emailInput} 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                            aria-label="Email Address"
                        />
                        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
                    </form>
                ) : (
                    <p className={styles.successMessage}>Thank you for subscribing!</p>
                )}
            </div>
        </section>
    );
};

export default Subscribe;
