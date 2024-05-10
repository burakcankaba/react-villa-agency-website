import React from 'react'
import Footer from '../components/layoutComponents/footer/Footer'
import Navbar from '../components/layoutComponents/navbar/Navbar'
import Whatsapp from '../components/whatsapp/Whatsapp'

const Layout = ({children}) => {
  return (
    <>  
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
        <Whatsapp/>{/* Fixed component */}
    </>
  )
}

export default Layout