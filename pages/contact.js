import React from 'react'
import Contact from '../components/Contact'
// import Layout from '../components/Layout'
import Link from 'next/link'
// import styles from '../styles/Home.module.scss'
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


function contact() {
    return (
      
      
           
        <motion.div  variants={pageEnter} initial="initial" animate="animate">
            <Contact />
        </motion.div>

      
    
    )
}

export default contact
