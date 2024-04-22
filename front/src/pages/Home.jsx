import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner'
import Feature from '../components/Feature/Feature'
 
const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Feature />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
