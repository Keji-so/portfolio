import { useEffect } from 'react'
import Head from 'next/head'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Nav from '../components/Nav'
import Name from '../components/Name'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      duration: .6,
      ease: easing,
      delay: 0.7
    }
  }
};

const stagger = {
  animate : {
    transition: {
      staggerChildren: 0.3,
      delay: 0.3
    }
  }
}

export default function Home() {




  return (

     <motion.div layoutId="lay" exit={{ opacity: 0 }} initial="initial"
     animate="animate" transition={{ duration: 1,  ease: "easeIn", delay: 0.1 }}>
      <Head>
        <title>Morenikeji</title>
        <meta name="description" content="frontend portfolio homepage developer" />
      </Head>

      <Name />

     <motion.div layoutId="start" variants={stagger} exit={{ opacity: 0 }} initial={{y: -400, opacity: 0}}
      animate={{y: 0, opacity: 1}} transition={{ duration: 0.7, delay: 0.1,  ease: "easeInOut" }} className={styles.container}>

       <div className={styles.left}>
         

          <motion.div className={styles.content} variants={stagger}>
            <div className={styles.name_reveal}>
              <motion.h1  variants={fadeInUp} className={styles.name_anim}>Morenikeji Ojo.</motion.h1>
            </div>
             
             <div className={styles.description}>
                 <motion.div variants={fadeInUp} className={styles.desc}>I’m a Frontend software developer, with a passion for responsive website design and a firm believer in the mobile-first approach.</motion.div>
          
             </div>
            
           </motion.div>

 

          
        <div className={styles.email}>
         <motion.a
         initial={{y: 100, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{delay: 0.7}}

         >ojokeji@gmail.com</motion.a> 
        </div>
       </div>

       <div className={styles.right}>
          <Nav />
       </div>
 </motion.div>

 <Project />

<Contact />
   
    </motion.div> 
  )
}
