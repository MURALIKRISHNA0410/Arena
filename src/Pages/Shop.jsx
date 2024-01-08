import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import Letter from '../Components/NewsLetter/Letter';
const Shop = () => {
  return (

    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Letter/>
    </div>
  )
}

export default Shop