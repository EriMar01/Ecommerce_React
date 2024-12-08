import styles from './about.module.css';
import { useNavigate } from "react-router";


const About = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.subtitle}>Discover who we are and why we love what we do.</p>
            </section>
            <section className={styles.mission}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.text}>
                    We aim to provide the best quality products at the best prices. Our goal is to make online shopping simple, fast, and enjoyable. Every item in our store is handpicked to ensure it meets the highest standards.
                </p>
            </section>
            <section className={styles.values}>
                <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
                <div className={styles.valuesList}>
                    <div className={styles.valueItem}>
                        <h3>Quality</h3>
                        <p>We only sell high-quality products that we stand behind.</p>
                    </div>
                    <div className={styles.valueItem}>
                        <h3>Customer Service</h3>
                        <p>Our support team is here to assist you 24/7, ensuring a hassle-free shopping experience.</p>
                    </div>
                    <div className={styles.valueItem}>
                        <h3>Fast Delivery</h3>
                        <p>We make sure your orders reach you as quickly as possible, no matter where you are.</p>
                    </div>
                </div>
            </section>
            <section className={styles.cta}>
                <p>Join the thousands of happy customers who trust us every day.</p>
                <button className={styles.ctaButton}
                    onClick={() => navigate(`/products/1`)}
                >Shop Now</button>
            </section>
        </div>
    );
};

export default About;
