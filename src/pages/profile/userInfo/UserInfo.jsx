import styles from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <h2 className={styles.sectionTitle}>My Profile</h2>
            <p className={styles.detail}>Name: John Doe</p>
            <p className={styles.detail}>Email: john.doe@example.com</p>
            <p className={styles.detail}>Joined: January 1, 2024</p>
            <button className={styles.ctaButton}>Edit Profile</button>
        </div>
    );
};

export default UserInfo;
