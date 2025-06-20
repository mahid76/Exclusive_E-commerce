import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import BestSelling from '../BestSelling/BestSelling'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Category />
      <BestSelling />
    </>
  )
}

export default Home
