import {useState} from 'react';
import styles from '../styles/Projects.module.scss';
import { CgArrowLongRight } from "react-icons/cg";


const Project = () => {

  const [right, setRight] = useState(true);

    const btnHover = () => {
        setRight(false);
    }

    const btnLeave = () => {
        setRight(true);
    }

    return (

      <div>

        <div className={styles.projects}>Projects</div>

        <div className={styles.project}>
            <div className={styles.left}>
                <div className={styles.container}>
                    <div className={styles.title}>Novela</div>
                    <div className={styles.image}>
                        <img className={styles.img} src="./images/novela.png" alt="novela image" />
                    </div>
                </div>

           <div className={styles.button} onMouseEnter={btnHover} onMouseLeave={btnLeave}>
             <div className={styles.btn}>
                  View More
                <div className={ `${styles["icon"]} ${styles[right ? "" : "right-active"]}`}>
                  <CgArrowLongRight size="1.9rem" />  
                </div>
                
             </div>
          </div>
                
               
            </div>

            <div className={styles.right}>
               <div className={styles.container}>
                    <div className={styles.title}>Eko-Gallery</div>
                    <div className={styles.image}>
                        <img  src="./images/eko.png" alt="eko image" />
                    </div>
                </div>


                 <div className={ `${styles["container"]} ${styles["contain"]}`}>
                    <div className={ `${styles["title"]} ${styles["titles"]}`}>Gateway</div>
                    <div className={ `${styles["image"]} ${styles["images"]}`}>
                        <img src="./images/gateway.png" alt="gateway image" />
                    </div>
                </div>
            </div>
        </div>

     </div>  
    )
}

export default Project
