import { useEffect } from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
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
      duration: .3,
      ease: easing,
      delay: 0.3
    }
  }
};

const pageEnter = {
  initial: {
    x: "100vw", 
    opacity: 0
  },
  animate: {
    x: 0, 
    opacity: 1,
    transition: {
     type: "spring",
     duration: 0.5,
     bounce: 0.3,
     delay: 0.5, 
     when: "beforeChildren",
     ease: "easeInOut",
     stagger: 0.5
    }
  }
}





export default function Home() {




  return (

     <div>
      <Head>
        <title>Morenikeji</title>
        <meta name="description" content="Morenikeji Ojo is a frontend developer, view portfolio homepage" />
        <meta property="og:title" content="Morenikeji Ojo portfolio" />
       </Head>

      <Name />

     <motion.div initial="initial" animate="animate" variants={pageEnter} className={styles.container}>

       <div className={styles.left}>
         

          <div className={styles.content} >
            <div className={styles.name_reveal}>
              <motion.h1 className={styles.name_anim}>Morenikeji Ojo.</motion.h1>
            </div>
             
             <div className={styles.description}>
                 <motion.div  variants={fadeInUp} className={styles.desc}>I’m a Frontend software developer, with a passion for responsive website design and a firm believer in the mobile-first approach.</motion.div>
          
             </div>
            
           </div>

 

          
          <div className={styles.email_cont}>
            <div className={styles.email}>
              <motion.div className={styles.mail} variants={fadeInUp}> ojokeji@gmail.com</motion.div>
            </div> 

          <motion.div className={styles.icons}>
              <Link href="https://github.com/Keji-so">
                  <motion.div variants={fadeInUp} className={styles.icon}><AiFillGithub size="1.8rem" /></motion.div>
              </Link>
              <Link href="https://www.linkedin.com/in/morenikeji-ojo/">
                  <motion.div  variants={fadeInUp} className={styles.icon}><FaLinkedin size="1.8rem" /></motion.div>
              </Link>
              <Link href="https://twitter.com/keji_so">
                  <motion.div variants={fadeInUp} className={styles.icon}><AiOutlineTwitter size="1.8rem" /></motion.div>
              </Link>
          </motion.div>
          
          
          </div>
       </div>

       <div className={styles.right}>
          <Nav />
       </div>
 </motion.div>

 <Project />

<Contact />
   
    </div> 
  )
}
