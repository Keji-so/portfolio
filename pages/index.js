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
      duration: .6,
      ease: easing,
      delay: 0.8
    }
  },
  pageExit: {
    opacity: 0,
    y: -400,
    backgroundColor: '#fafafa',
    transition: {
    duration: 0.3,
    ease: "linear"
    }
  }
};



const stagger = {
  animate : {
    transition: {
      staggerChildren: 0.5,
      delay: 0.3
    }
  }
}

export default function Home() {




  return (

     <div>
      <Head>
        <title>Morenikeji</title>
        <meta name="description" content="frontend portfolio homepage developer" />
      </Head>

      <Name />

     <motion.div  initial={{y: -400, opacity: 0}}
      animate={{y: 0, opacity: 1}} transition={{ duration: 0.7, delay: 0.1,  ease: "easeInOut" }} className={styles.container}>

       <div className={styles.left}>
         

          <div className={styles.content} >
            <div className={styles.name_reveal}>
              <motion.h1 initial="initial" animate="animate" variants={fadeInUp} className={styles.name_anim}>Morenikeji Ojo.</motion.h1>
            </div>
             
             <div className={styles.description}>
                 <motion.div initial="initial" animate="animate" variants={fadeInUp} className={styles.desc}>I’m a Frontend software developer, with a passion for responsive website design and a firm believer in the mobile-first approach.</motion.div>
          
             </div>
            
           </div>

 

          
          <div className={styles.email_cont}>
            <div className={styles.email}>
              <motion.div className={styles.mail} initial="initial" animate="animate" variants={fadeInUp}> ojokeji@gmail.com</motion.div>
            </div> 

          <motion.div className={styles.icons}>
              <Link href="https://github.com/Keji-so">
                  <motion.div initial="initial" animate="animate" variants={fadeInUp} className={styles.icon}><AiFillGithub size="1.8rem" /></motion.div>
              </Link>
              <Link href="https://www.linkedin.com/in/morenikeji-ojo/">
                  <motion.div initial="initial" animate="animate" variants={fadeInUp} className={styles.icon}><FaLinkedin size="1.8rem" /></motion.div>
              </Link>
              <Link href="https://twitter.com/keji_so">
                  <motion.div initial="initial" animate="animate" variants={fadeInUp} className={styles.icon}><AiOutlineTwitter size="1.8rem" /></motion.div>
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
