import styles from '../styles/Home.module.scss'
import Link from 'next/link'


function Name() {
    return (
        <Link href="/">
        <div>
             <div className={styles.name}>
                  M
             </div>
        </div>
        </Link>
    )
}

export default Name
