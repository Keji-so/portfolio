import styles from '../styles/Home.module.scss'
import { IoMailOutline } from "react-icons/io5";
import Link from 'next/link'
import Name from '../components/Name'
import { motion } from 'framer-motion';


const pageEnter = {
    initial: {
      x: "100vw", 
      opacity: 0
    },
    animate: {
      x: 0, 
      opacity: 1,
      transition: {
       type: "tween",
       duration: 0.8,
       delay: 0.5, 
       when: "beforeChildren",
       ease: "easeInOut"
  
      }
    }
  }

function thanks() {
    return (
        <>

       <Name />

         <motion.div variants={pageEnter} initial="initial" animate="animate" className={styles.thanks}>
            <div className={styles.container}>
                <div className={styles.icon}><IoMailOutline size="10rem" /></div>
                <div className={styles.title}>Thank You!</div>
                <div className={styles.message}>Your message has been sent.</div>
        <Link href="/">
                <div className={styles.button}>Homepage</div>
        </Link>
            </div>
            
        </motion.div>
        </>
    )
}

export default thanks
