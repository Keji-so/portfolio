import styles from '../styles/Projects.module.scss';


const Project = () => {
    return (

      <div>

        <div className={styles.projects}>Projects</div>

        <div className={styles.project}>
            <div className={styles.left}>
                <div className={styles.container}>
                    <div className={styles.title}>Novela</div>
                    <div className={styles.image}>
                        <img src="./images/novela.png" alt="novela image" />
                    </div>
                </div>
                
                <div className={ `${styles["container"]} ${styles["contain"]}`}>
                    <div className={ `${styles["title"]} ${styles["titles"]}`}>Gateway</div>
                    <div className={styles.image}>
                        <img src="./images/gateway.png" alt="gateway image" />
                    </div>
                </div>
            </div>

            <div className={styles.right}>
               <div className={styles.container}>
                    <div className={styles.title}>Eko-Gallery</div>
                    <div className={styles.image}>
                        <img src="./images/eko.png" alt="eko image" />
                    </div>
                </div>
            </div>
        </div>

     </div>  
    )
}

export default Project
