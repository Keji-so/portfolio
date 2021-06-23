import Name from './Name'
import styles from '../styles/Home.module.scss'





const Layout = ({children}) => {
  return (
        <div>
            <div>
              <Name className={styles.sticky} />
              {children}
            </div>
         </div>  
    )
}

export default Layout