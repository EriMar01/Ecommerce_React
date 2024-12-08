import TestimonialSection from '../../components/testimonial/TestimonialSection';
import Subscribe from '../../components/subscribe/Subscribe';
import styles from './Home.module.css';

const Home = () => {
    
    return (
        <div className={styles.homeContainer}>
            <section className={styles.hero}>
                <h1>Welcome to Our Store</h1>
                <p>Discover amazing products at great prices!</p>
            </section>

            {/* Sección de testimonios */}
            <TestimonialSection />

            {/* Sección de suscripción */}
            <Subscribe />
        </div>
    );
};

export default Home;
