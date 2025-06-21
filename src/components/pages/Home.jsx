import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import BestSelling from '../BestSelling/BestSelling'
import OfferBanner from '../OfferBanner/OfferBanner'
import ExplorerProduct from '../ExplorerProduct/ExplorerProduct'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Category />
      <BestSelling />
      <OfferBanner />
      <ExplorerProduct />
    </>
  )
}

export default Home
