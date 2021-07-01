import styles from '../styles/Nav.module.scss';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeLeft = {
  initial: {
    x: 200,
  },
  animate: {
    x: 0,
    transition: {
      duration: .6,
      ease: easing,
      delay: 0.8
    }
  }
};

const fadeRight = {
  initial: {
    x: -200,
  },
  animate: {
    x: 0,
    transition: {
      duration: .6,
      ease: easing,
      delay: 0.8
    }
  }
};

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
      delay: 0.5
    }
  }
}



function Nav() {


   

    return (
      <div className={styles.nav}>

        <motion.div initial="initial" animate="animate" variants={stagger} className={styles.menu} >
          <div className={styles.part}>
        <Link href="/about">
            <motion.a  variants={fadeRight} className={ `${styles["option"]} ${styles["about"]}`}>About</motion.a>
        </Link>
        <Link href="/projects">
            <motion.a  variants={fadeLeft} className={ `${styles["option"]} ${styles["projects"]}`}>Projects</motion.a>
        </Link>
         </div>
          <div className={styles.part}>
        <Link href="/contact">
            <motion.a  variants={fadeRight} className={ `${styles["option"]} ${styles["contact"]}`}>Contact</motion.a>
        </Link>
        <Link href="https://drive.google.com/file/d/1a0txSzZOrmOzmeRlK73wxmSvkO7zzVkh/view?usp=sharing">
            <motion.div initial="initial" animate="animate" variants={fadeLeft} className={ `${styles["option"]} ${styles["resume"]}`}>Resume</motion.div>
        </Link>
           </div>
        <Link href="https://hashnode.com/@Keji">
            <motion.div  variants={fadeRight} className={ `${styles["option"]} ${styles["articles"]}`}>Articles</motion.div>
        </Link>

       
        </motion.div>

          <div className={styles.icons}>
        <Link href="https://github.com/Keji-so">
            <motion.div  variants={fadeInUp} className={styles.icon}><AiFillGithub size="1.8rem" /></motion.div>
        </Link>
        <Link href="https://www.linkedin.com/in/morenikeji-ojo/">
            <motion.div  variants={fadeInUp} className={styles.icon}><FaLinkedin size="1.8rem" /></motion.div>
        </Link>
        <Link href="https://twitter.com/keji_so">
            <motion.div  variants={fadeInUp} className={styles.icon}><AiOutlineTwitter size="1.8rem" /></motion.div>
        </Link>
          </div>

         
      </div>
    );
  }
  
  export default Nav;