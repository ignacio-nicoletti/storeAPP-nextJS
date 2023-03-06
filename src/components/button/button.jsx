import { products } from "../../base.js"

export default function Button({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
    product
}) {




    const addProduct = (product) => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
            setTotal(total + product.precio * product.cantidad);
            setCountProducts(countProducts + product.cantidad);
            return setAllProducts([...products]);
        }

        setTotal(total + product.precio * product.cantidad);
        setCountProducts(countProducts + product.cantidad);
        setAllProducts([...allProducts, product]);


    }

    const subProduct = () => {
        setCountProducts(countProducts - 1)
    }

    return (
        <>
            <button onClick={() => addProduct(product)}> sumar al carrito </button>
            {/* {allProducts.includes("Tomate") ??
                <button onClick={subProduct}> restar un producto </button>} */}

        </>


    )


}