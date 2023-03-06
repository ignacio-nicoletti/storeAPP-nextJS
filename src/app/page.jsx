'use client'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Button from '@/components/button/button'
import { useState } from 'react'
import NavBar from '@/components/navBar/NavBar'
import { products } from "../base.js"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [allProducts, setAllProducts] = useState([]);//cuenta todos los productos 
  const [total, setTotal] = useState(0); //precio total de todos los productos 
  const [countProducts, setCountProducts] = useState(0); //cuenta el producto en si
  const [render, setRender] = useState(false)

  return (
    <div>
      <NavBar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        total={total}
        setTotal={setTotal}


      />


      <div className={styles.containerItems}>
        {products.map(product => (
          <div className={styles.item} key={product.id}>
            <figure>
              <img src={product.imagen} alt={product.nameProduct} />
            </figure>
            <div className={styles.infoProduct}>
              <h2>{product.nameProduct}</h2>
              <p className={styles.price}>${product.precio}</p>

              <Button
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                render={render}
                setRender={setRender}
                product={product}
              />

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
