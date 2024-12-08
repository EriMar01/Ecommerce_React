import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
    return (
        <section className={styles.testimonials}>
            <h2>What Our Customers Are Saying</h2>
            <div className={styles.testimonialList}>
                <div className={styles.testimonialCard}>
                    <p>Great quality products and fast shipping! Will definitely buy again.</p>
                    <p>- John Doe</p>
                    <div className={styles.stars}>
                        <span role="img" aria-label="five stars">⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
                <div className={styles.testimonialCard}>
                    <p>I love the customer service. My order arrived on time and well packed!</p>
                    <p>- Jane Smith</p>
                    <div className={styles.stars}>
                        <span role="img" aria-label="five stars">⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
                <div className={styles.testimonialCard}>
                    <p>Absolutely incredible products! Truly the best I have ever experienced. Highly recommend!</p>
                    <p>- Alex Johnson</p>
                    <div className={styles.stars}>
                        <span role="img" aria-label="five stars">⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
