import styles from "./Pagination.module.css";
import { useNavigate } from "react-router";


const Pagination = ({ currentPage, totalPages }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.pagination}>
            <button
                className={styles.pageButton}
                disabled={currentPage === 1} // Deshabilitar "Previous" si estamos en la primera página
                
                onClick={() => navigate(`/products/${currentPage - 1}`)}

            >
                Previous
            </button>

            <span className={styles.pageInfo}> Page {currentPage} </span>

            <button
                className={styles.pageButton}
                disabled={currentPage === totalPages} // Deshabilitar "Next" si estamos en la última página
                onClick={() => navigate(`/products/${currentPage + 1}`)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
