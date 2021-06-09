// import {useState} from 'react';
import styles from '../styles/Nav.module.scss';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";


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
            <div className={ `${styles["option"]} ${styles["about"]}`}>About</div>
            <div className={ `${styles["option"]} ${styles["projects"]}`}>Projects</div>
          </div>
          <div className={styles.part}>
            <div className={ `${styles["option"]} ${styles["contact"]}`}>Contact</div>
            <div className={ `${styles["option"]} ${styles["resume"]}`}>Resume</div>
           </div>
            <div className={ `${styles["option"]} ${styles["articles"]}`}>Articles</div>

       
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
            <div className={styles.icon}><AiFillGithub size="1.8rem" /></div>
            <div className={styles.icon}><FaLinkedin size="1.8rem" /></div>
            <div className={styles.icon}><AiOutlineTwitter size="1.8rem" /></div>
          </div>

         
      </div>
    );
  }
  
  export default Nav;