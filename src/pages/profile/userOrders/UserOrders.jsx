import styles from './UserOrders.module.css';

const UserOrders = () => {
    return (
        <div className={styles.userOrders}>
            <h2 className={styles.sectionTitle}>My Orders</h2>
            <ul className={styles.ordersList}>
                <li className={styles.orderItem}>Order #1: $120 - Delivered</li>
                <li className={styles.orderItem}>Order #2: $80 - Pending</li>
                <li className={styles.orderItem}>Order #3: $50 - Delivered</li>
            </ul>
        </div>
    );
};

export default UserOrders;
