import {useState} from 'react';
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Nav from './Nav'
import { motion } from 'framer-motion';


const easing = [0.6, -0.05, 0.01, 0.99];

const fadeDown = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: .4,
      stiffness: 120,
      delay: 0.3
    }
  }
};

function Name() {

      const [ham, setHam] = useState(true);

    const handleClick = () => {
        setHam(!ham);
    }


    return (
      <>

     <div className={styles.cover}>
           <motion.div initial="initial" animate="animate" variants={fadeDown} className={styles.names}>
             
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

          </motion.div>

     </div>
    

        <div className={ `${styles["dropdown"]} ${styles[ham ? "drop_active" : ""]}`}>
                  <Nav />
         </div>

        </>
    )
}

export default Name
