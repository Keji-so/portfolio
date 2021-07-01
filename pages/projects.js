// import  {useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss';
import { Projects } from '../components/data.js';
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";
import Name from '../components/Name'
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

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

const fadeInUp = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      duration: .5,
      ease: easing,
      delay: 0.4
    }
  }
};


function Card() {

   
return (
    <>  
      
 
  <Name />
  <div >

    <div className={styles.proj_cont}>
      <motion.div initial="initial" animate="animate" variants={fadeInUp}  className={styles.projects}>
          Projects
      </motion.div>
    </div>
    
    <motion.div variants={pageEnter} initial="initial" animate="animate" className={styles.card_container}>
       {Projects.map(project => {
       
          return (
          <div className={styles.card} key={project.id}>
            <div className={styles.container}>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.description}>{project.description}</div>
              <div className={styles.language}>
                {project.lang.map(lang => {
                  return (
                  <div className={styles.lang}>{lang}</div>
                 )})}
                
              </div>
              <div className={styles.direct}>

             <Link href={project.live}>
                <div className={styles.live}>
                  <div className={styles.icon}><BsBoxArrowInUpRight size="1.2rem" /></div>
                  <div className={styles.lives}><a>Live</a></div>
                </div>
               </Link> 
              
               <Link href={project.code}>
                <div className={styles.live}>
                  <div className={styles.icon}><VscRepoForked size="1.2rem" /></div>
                  <div className={styles.codes}><a>Code</a></div>
                </div>
               </Link>
              </div>
            </div>
          </div>
          )
       })}
    </motion.div>    
   </div>
   
   </>
    )
}

export default Card
