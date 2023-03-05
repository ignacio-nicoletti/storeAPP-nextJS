'use client'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Button from '@/components/button/button'
import { useState } from 'react'
import NavBar from '@/components/navBar/NavBar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let products = [
    {
      id: 1,
      nameProduct: "tomate",
      precio: "50$",
      cantidad: 50,
      imagen: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2021-09/tomate-fruta-verdura-hortaliza%C2%A9iStock.jpg"
    },
    {
      id: 2,
      nameProduct: "banana",
      precio: "100$",
      cantidad: 50,
      imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/5ZPIELNJ7ZEKBNGANS3UGH3ADI.jpg"
    },
    {
      id: 3,
      nameProduct: "sandia",
      precio: "300$",
      cantidad: 50,
      imagen: "https://s1.eestatic.com/2021/08/18/ciencia/nutricion/605201362_200816273_1024x576.jpg"
    },
    {
      id: 4,
      nameProduct: "manzana",
      precio: "80$",
      cantidad: 50,
      imagen: "https://t1.uc.ltmcdn.com/es/posts/6/6/4/que_vitaminas_tiene_la_manzana_51466_orig.jpg"
    },
    {
      id: 5,
      nameProduct: "durazno",
      precio: "100$",
      cantidad: 50,
      imagen: "https://www.agritotal.com/files/image/31/31512/5e397638cd45d.jpg"
    },
    {
      id: 6,
      nameProduct: "frutilla",
      precio: "100$",
      cantidad: 50,
      imagen: "https://www.latercera.com/resizer/i7KsCA1RBvv0oK9hcZAV9bvpltA=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/TSLTOZATTND4LA5PO6TKQQQXQE.jpg"
    }];


  const [allProducts, setAllProducts] = useState([]);//cuenta todos los productos en el carrito
  const [total, setTotal] = useState(0); //precio total de todos los productos 
  const [countProducts, setCountProducts] = useState(0); //cuenta el producto en si


  return (
    <div>
      <NavBar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        countProducts={countProducts}
        total={total}
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

              />

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
