// import {useState} from 'react';
import styles from '../styles/Nav.module.scss';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'



function Nav({handleDropDown}) {

    // const [ham, setHam] = useState(true);
    // console.log(handleDropDown);

    // const hamHover = () => {
    //     setHam(false);
    // }

    // const hamLeave = () => {
    //     setHam(true);
    // }

   

    return (
      <div className={styles.nav}>

        <div className={styles.menu}>
          <div className={styles.part}>
        <Link href="/about">
            <div className={ `${styles["option"]} ${styles["about"]}`}>About</div>
        </Link>
        <Link href="/projects">
            <div className={ `${styles["option"]} ${styles["projects"]}`}>Projects</div>
        </Link>
         </div>
          <div className={styles.part}>
        <Link href="/contact">
            <div className={ `${styles["option"]} ${styles["contact"]}`}>Contact</div>
        </Link>
        <Link href="https://drive.google.com/file/d/1a0txSzZOrmOzmeRlK73wxmSvkO7zzVkh/view?usp=sharing">
            <div className={ `${styles["option"]} ${styles["resume"]}`}>Resume</div>
        </Link>
           </div>
        <Link href="https://hashnode.com/@Keji">
            <div className={ `${styles["option"]} ${styles["articles"]}`}>Articles</div>
        </Link>

       
        </div>
{/* 
          <div className={styles.right}>
                 <div className={styles.hamburger} onClick={() => handleDropDown()} onMouseEnter={hamHover} onMouseLeave={hamLeave}>
                     <div className={styles.line}></div>
                     <div className={`line center-line ${ham ? "" : "center-active"}`}></div>
                     <div className={styles.line}></div>
                 </div>
          </div> */}

          <div className={styles.icons}>
        <Link href="https://github.com/Keji-so">
            <div className={styles.icon}><AiFillGithub size="1.8rem" /></div>
        </Link>
        <Link href="https://github.com/Keji-so">
            <div className={styles.icon}><FaLinkedin size="1.8rem" /></div>
        </Link>
        <Link href="https://github.com/Keji-so">
            <div className={styles.icon}><AiOutlineTwitter size="1.8rem" /></div>
        </Link>
          </div>

         
      </div>
    );
  }
  
  export default Nav;