import { useState, useEffect } from 'react';
import { getData } from '../database'; // Importamos la función getData

const useProducts = (currentPage) => {
    const [products, setProducts] = useState([]); // Este estado almacena la lista de productos obtenidos de la base de datos o la API
    const [totalPages, setTotalPages] = useState(0); // Total de páginas disponibles
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

    useEffect(() => { // Este efecto se activa cada vez que el valor de isFetching o currentPage cambia
        const fetchProducts = async () => {
            setLoading(true); // Empieza a cargar
            
            try {
                const response = await getData(); // Llamamos a la función getData

                // Lógica para manejar la paginación
                const productsPerPage = 6; // Productos por página
                const startIndex = (currentPage - 1) * productsPerPage;
                const endIndex = startIndex + productsPerPage;

                // Establecer los productos para la página actual
                setProducts(response.slice(startIndex, endIndex)); 


                // Calcular el total de páginas
                setTotalPages(Math.ceil(response.length / productsPerPage));

            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]); // Limpiar productos si no estamos haciendo fetch
            }
            
            setLoading(false); // Termina la carga
        };

        fetchProducts(); // Llama a la función para obtener los productos

    }, [currentPage]); // Se ejecuta cada vez que cambie la página
    
    return { products, totalPages, loading };
};

export default useProducts;
