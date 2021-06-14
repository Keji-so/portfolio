import {useState} from 'react';
import Link from 'next/link'
import styles from '../styles/Projects.module.scss';
import { CgArrowLongRight } from "react-icons/cg";


const Project = () => {

  const [right, setRight] = useState(true);
  const [novela, setNovela] = useState(true);
  const [eko, setEko] = useState(true);
  const [gate, setGate] = useState(true);   

    const btnHover = () => {
        setRight(false);
    }

    const btnLeave = () => {
        setRight(true);
    }

    const novelaHover = () => {
        setNovela(false);
    }

     const novelaLeave = () => {
        setNovela(true);
    }

      const ekoHover = () => {
        setEko(false);
    }

     const ekoLeave = () => {
        setEko(true);
    }

   const gateHover = () => {
        setGate(false);
    }

     const gateLeave = () => {
        setGate(true);
    }

   

    return (

      <div>

        <div className={styles.projects}>Projects</div>

        <div className={styles.project}>
            <div className={styles.left}>
            <a href="https://keji-so.github.io/novela-g/#/">
                <div className={styles.container} onMouseEnter={novelaHover} onMouseLeave={novelaLeave}>
                    <div className={ `${styles["title"]} ${styles[novela ? "" : "title-active"]}`}>Novela</div>
                    <div className={ `${styles["image"]} ${styles[novela ? "" : "image-active"]}`}>
                        <img className={styles.img} src="./images/novela.png" alt="novela image" />
                    </div>
                </div>
             </a>   

        <Link href="/projects">
           <div className={styles.button} onMouseEnter={btnHover} onMouseLeave={btnLeave}>
             <div className={styles.btn}>
                  View More
                <div className={ `${styles["icon"]} ${styles[right ? "" : "right-active"]}`}>
                  <CgArrowLongRight size="1.9rem" />  
                </div>
                
             </div>
          </div>
        </Link>
                
               
            </div>

            <div className={styles.right}>
            <a href="https://eko-gallery.netlify.app">
               <div className={styles.container} onMouseEnter={ekoHover} onMouseLeave={ekoLeave}>
                 <div className={ `${styles["title"]} ${styles[eko ? "" : "title-active"]}`}>Eko-Gallery</div>
                    <div className={ `${styles["image"]} ${styles[eko ? "" : "image-active"]}`}>
                        <img  src="./images/eko.png" alt="eko image" />
                    </div>
                    
                </div>
            </a>

            <a href="https://gateway-page.netlify.app">
                 <div className={ `${styles["container"]} ${styles["contain"]}`} onMouseEnter={gateHover} onMouseLeave={gateLeave}>
                    <div className={ `${styles["title"]} ${styles["titles"]} ${styles[gate ? "" : "title-active"]}`}>Gateway</div>
                    <div className={ `${styles["image"]} ${styles["images"]} ${styles[gate ? "" : "images-active"]}`}>
                        <img src="./images/gateway.png" alt="gateway image" />
                    </div>
                </div>
           </a>   
            </div>
        </div>

     </div>  
    )
}

export default Project
