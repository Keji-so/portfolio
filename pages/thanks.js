import styles from '../styles/Home.module.scss'
import { IoMailOutline } from "react-icons/io5";
import Link from 'next/link'
import Name from '../components/Name'



function thanks() {
    return (
        <>

       <Name />

        <div className={styles.thanks}>
            <div className={styles.container}>
                <div className={styles.icon}><IoMailOutline size="10rem" /></div>
                <div className={styles.title}>Thank You!</div>
                <div className={styles.message}>Your message has been sent.</div>
        <Link href="/">
                <div className={styles.button}>Homepage</div>
        </Link>
            </div>
            
        </div>
        </>
    )
}

export default thanks
