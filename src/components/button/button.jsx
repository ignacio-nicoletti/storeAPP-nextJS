export default function Button({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,


    id }) {




    const addProduct = () => {
        id === 1
            ? setAllProducts(allProducts + " Tomate") :
            id === 2 ? setAllProducts(allProducts + " Banana") :
                id === 3 ? setAllProducts(allProducts + " Sandia") :
                    id === 4 ? setAllProducts(allProducts + " Manzana") :
                        id === 5 ? setAllProducts(allProducts + " Durazno") :
                            id === 6 ? setAllProducts(allProducts + " Frutilla") : ""
        setCountProducts(countProducts + 1)

    }

    const subProduct = () => {
        id === 1
            ? setAllProducts(allProducts - " Tomate") :
            id === 2 ? setAllProducts(allProducts + " Banana") :
                id === 3 ? setAllProducts(allProducts + " Sandia") :
                    id === 4 ? setAllProducts(allProducts + " Manzana") :
                        id === 5 ? setAllProducts(allProducts + " Durazno") :
                            id === 6 ? setAllProducts(allProducts + " Frutilla") : ""
    }

    return (
        <>
            <button onClick={addProduct}> sumar al carrito </button>
            {allProducts.includes(id) ??
                <button onClick={subProduct}> restar un producto </button>}

        </>


    )


}