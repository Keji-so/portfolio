import Name from './Name'




const Layout = ({children}) => {
  return (
        <div>
            <div>
              <Name />
              {children}
            </div>
         </div>  
    )
}

export default Layout