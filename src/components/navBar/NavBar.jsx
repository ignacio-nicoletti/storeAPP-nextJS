'use client'

import { useState } from "react";
import style from './navBar.module.css'

export default function NavBar({
    allProducts,
    setAllProducts,
    countProducts,
    total }) {
    const [active, setActive] = useState(false);

    return (

        // <ul>

        //     <li><Link href="/">Home</Link> </li>
        //     <li><Link href="/about">About</Link> </li>

        // </ul>
        <div className={style.header}>
            <div className={style.containerIcon}>
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
                        className='icon-cart'
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
            </div>

            <div
                className={`{style.container-cart-products} ${active ? '' : 'hidden-cart'
                    }`}
            >
                {allProducts.length ? (
                    <>
                        <div className='row-product'>
                            {allProducts.map(product => (
                                <div className='cart-product' key={product.id}>
                                    <div className='info-cart-product'>
                                        <span className='cantidad-producto-carrito'>
                                            {product.quantity}
                                        </span>
                                        <p className='titulo-producto-carrito'>
                                            {product.nameProduct}
                                        </p>
                                        <span className='precio-producto-carrito'>
                                            ${product.price}
                                        </span>
                                    </div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='icon-close'
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
                            <span className={style.totalPagar}>{allProducts}</span>
                        </div>

                        <button className={style.btnClearAll} onClick="">
                            Vaciar Carrito
                        </button>
                    </>
                ) : (
                    <p className='cart-empty'>El carrito está vacío</p>
                )}
            </div>


        </div >
    )
}