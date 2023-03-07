
import Link from 'next/link'
import styles from './page.module.css'
export default function About() {


    return (
        <>
            <div className={styles.home}>
                <Link href='/'>Home</Link>

            </div>
            <main className={styles.main}>
                <div className={styles.texto}>
                    <p>Esto fue una pagina creada con React-NextJs <br /> como prueba e interiorizacion de la misma.</p>

                </div>
            </main>



        </>

    )
}