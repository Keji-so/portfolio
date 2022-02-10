import styles from '../styles/About.module.scss';
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Name from '../components/Name'
import { motion } from 'framer-motion';
import Head from 'next/head'


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


function about() {
    return (
     
      <>
      <Head>
        <title>About-Morenikeji</title>
        <meta name="description" content="Morenikeji Ojo is a frontend developer, view portfolio homepage" />
        <meta property="og:title" content="Morenikeji Ojo portfolio" />
      </Head>

      <Name />
      
        <motion.div variants={pageEnter} initial="initial" animate="animate" className={styles.about}>
            <div className={styles.top}>
                <div className={styles.title}>
                    Morenikeji Ojo.
                </div>

             <div className={styles.icons}>
                        <Link href="https://github.com/Keji-so">
                            <div className={styles.icon}><AiFillGithub size="1.8rem" /></div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/morenikeji-ojo/">
                            <div className={styles.icon}><FaLinkedin size="1.8rem" /></div>
                        </Link>
               
             </div>
            </div>
            
           <div className={styles.content}>
                I am a results-oriented Frontend Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites.
                I leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions.
             <p>
                I am currently a junior User Interface Developer at CheckDc.
             </p>
           
            </div>
            

            <div className={styles.links}>

            <Link href="https://drive.google.com/file/d/1a0txSzZOrmOzmeRlK73wxmSvkO7zzVkh/view?usp=sharing">
           <div className={styles.btn}>
                <span class={styles.link}>
                    <span class={styles.link__inner}>
                        <span>
                        <a>Download CV</a> 
                        </span>
                      <span class={styles.link__animated}>
                        <a>Download CV</a>
                      </span>
                    </span>
              </span>
           </div>
         </Link>

         <Link href="/contact">
           <div className={styles.btn}>
                <span class={styles.link}>
                    <span class={styles.link__inner}>
                        <span>
                        <a>Contact</a> 
                        </span>
                      <span class={styles.link__animated}>
                        <a>Contact</a>
                      </span>
                    </span>
              </span>
           </div>
         </Link>
            </div>

          
        </motion.div>

        </>
        
    )
}

export default about
