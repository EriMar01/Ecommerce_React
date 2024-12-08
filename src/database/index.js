export const getData = async () => {
    const url = "https://fakestoreapi.com/products"; //Se define la URL de la API que la función utilizará para obtener los datos. En este caso, apunta a la API pública Fake Store API, que proporciona datos ficticios de productos de una tienda.

    try {
        const data = await fetch(url); //Realiza una solicitud HTTP GET a la URL especificada.
        const response = await data.json(); //Convierte la respuesta en un objeto JSON

        if (response.error) {
            return response;
        }

        return response; // Retornamos el arreglo completo de productos

    } catch (error) { //Si ocurre un error durante la ejecución de fetch o data.json(), el flujo de control pasa al bloque catch
        console.error("Fetch Error: ", error);
        return []; //no se pudieron obtener datos
    }
};
