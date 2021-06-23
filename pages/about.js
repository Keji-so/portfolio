import styles from '../styles/About.module.scss';
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";




function about() {
    return (
        <div className={styles.about}>
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
                I am seeking for new opportunities and challenges that will expand my skill set.
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
                        <a>Download Resume</a>
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

          
        </div>
    )
}

export default about
