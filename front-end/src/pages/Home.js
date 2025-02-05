import React from 'react'
import Header from '../components/Header';
import Steps from '../components/Steps';
import Descriptions from '../components/Descriptions';
import Testimonials from '../components/Testimonials';
import GenerateBtn from '../components/GenerateBtn';

function Home() {
  return (
    <div>
      <h1>
        <Header />
        <Steps />
        <Descriptions />
        <Testimonials />
        <GenerateBtn />
      </h1>
    </div>
  )
}

export default Home;