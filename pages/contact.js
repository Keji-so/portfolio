import React from 'react'
import Contact from '../components/Contact'
import Head from 'next/head'
import Link from 'next/link'
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
      
      
         <>

       <Head>
        <title>About-Morenikeji</title>
        <meta name="description" content="Morenikeji Ojo is a frontend developer, view portfolio homepage" />
        <meta property="og:title" content="Morenikeji Ojo portfolio" />
      </Head>

        <motion.div  variants={pageEnter} initial="initial" animate="animate">
            <Contact />
        </motion.div>
      </>
      
    
    )
}

export default contact
