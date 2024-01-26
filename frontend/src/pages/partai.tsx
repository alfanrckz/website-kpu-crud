import Footer from '@/components/Footer'
import ListPartai from '@/components/ListPartai'
import Navbar from '@/components/Navbar'
import React from 'react'

const partai = () => {
  return (
    <div>
      <Navbar/>
      <ListPartai parties={[]}/>
      <Footer/>
    </div>
  )
}

export default partai
