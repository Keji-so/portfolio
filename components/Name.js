import {useState} from 'react';
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Nav from './Nav'



function Name() {

      const [ham, setHam] = useState(true);

    const handleClick = () => {
        setHam(!ham);
    }


    return (
      <>

     <div className={styles.cover}>
           <div className={styles.names}>
             
        <Link href="/">
             <div className={styles.left}>
                <div className={styles.name}>
                  M
                </div>
               <div className={styles.fullname}>
                  Morenikeji
                </div>
             </div>
         </Link>

             <div className={ `${styles["menu"]} ${styles[ham ? "" : "menu_active"]}`} onClick={handleClick}>
                  <div className={ `${styles["line"]} ${styles[ham ? "" : "first"]}`}></div>
                  <div className={ `${styles["line"]}  ${styles[ham ? "center" : "active"]}`}></div>
                  <div className={ `${styles["line"]} ${styles[ham ? "" : "last"]}`}></div>
             </div>

          </div>

     </div>
    

        <div className={ `${styles["dropdown"]} ${styles[ham ? "drop_active" : ""]}`}>
                  <Nav />
         </div>

        </>
    )
}

export default Name
