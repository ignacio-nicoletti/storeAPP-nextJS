'use client'

import { useState } from "react";
import style from './navBar.module.css'

export default function NavBar({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal }) {
    const [active, setActive] = useState(false);

    console.log(allProducts);

    const onDeleteProduct = (product) => {
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.precio * product.cantidad);
        setCountProducts(countProducts - product.cantidad);
        setAllProducts(results);
    };
    const cleanStore = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };
    return (

        <div className={style.containerIcon}>
            <h3 className={style.h3}>Tienda hecha con Next.js</h3>
            <div
                className={style.containerCartIcon}
                onClick={() => setActive(!active)}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className={style.iconCart}
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                    />
                </svg>
                <div className={style.countProducts}>
                    <span id='contador-productos'>{countProducts}</span>
                </div>
            </div>


            <div
                className={active ? style.containerCartProducts : style.hiddenCart}

            >
                {allProducts.length ? (
                    <>
                        <div className='row-product'>
                            {allProducts.map(product => (
                                <div className={style.cartProduct} key={product.id}>
                                    <div className={style.infoCartProduct}>
                                        <span className={style.cantidadProductoCarrito}>
                                            {product.cantidad}
                                        </span>
                                        <p className={style.tituloProductoCarrito}>
                                            {product.nameProduct}
                                        </p>
                                        <span className={style.precioProductoCarrito}>
                                            ${product.precio}
                                        </span>
                                    </div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className={style.iconClose}
                                        onClick={() => onDeleteProduct(product)}
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        <div className={style.cartTotal}>
                            <h3>Total:</h3>
                            <span className={style.totalPagar}>${total}</span>
                        </div>

                        <button className={style.btnClearAll} onClick={cleanStore}>
                            Vaciar Carrito
                        </button>
                    </>
                ) : (
                    <p className={style.cartEmpty}>El carrito está vacío</p>
                )}

            </div>

        </div>

    )
}