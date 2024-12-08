import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';  // Componente para mostrar información del usuario
import UserOrders from './userOrders/UserOrders'; // Componente para mostrar los pedidos del usuario
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";


const Profile = () => {
    const navigate = useNavigate();
    const { isLoggedIn, handleLogout } = useAuth();

    return (
        <div className={styles.profileContainer}>
            {isLoggedIn && (
                <>
                    <h1 className={styles.title}>Your Personal Dashboard</h1>
                    <p className={styles.subTitle}>Manage your profile, track your orders, and explore what is new. Everything in one place.</p>
                    <div className={styles.sections}>
                        <div className={styles.profileCard}>
                            <UserInfo /> 
                        </div>

                        <div className={styles.profileCard}>
                            <UserOrders />
                        </div>
                    </div>

                    <div className={styles.favorite}>
                        <h1 className={styles.title}>Your Ultimate Faves</h1>
                        <p className={styles.subTitle}>Dive into your top picks and discover more about the things you love the most.</p>
                        <button 
                            className={styles.ctaButton}
                            onClick={() => navigate(`/favorite`)} // Redirige a la página de favoritos
                        >
                            Explore Your Favorites
                        </button>
                    </div>
                    <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>        
    );
};

export default Profile;
