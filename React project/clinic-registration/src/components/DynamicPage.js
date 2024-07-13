import React, { Fragment } from 'react'
import SideMenu from './SideMenu'
import Head from './Head'
import Main from './Main'
import Footer from './Footer'

function DynamicPage({title}) {
 
  return (
    
      <Fragment>
        <SideMenu />
        
        <Head title = {title}/>
        <Main />
        <Footer />


      </Fragment>
  
  )
}

export default DynamicPage
