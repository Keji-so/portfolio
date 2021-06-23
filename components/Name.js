import styles from '../styles/Home.module.scss'
import Link from 'next/link'


function Name() {
    return (
        <Link href="/">
        <div className={styles.names}>
             <div className={styles.name}>
                  M
             </div>

             <div className={styles.fullname}>
                  Morenikeji
             </div>
        </div>
        </Link>
    )
}

export default Name
