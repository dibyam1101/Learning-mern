import React from 'react';
import "./Home.css"
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Xiaomi/Redmi10Prime/GW/BAU-13THJUNE/Rv/D45368762_INWLD-BAU_Redmi10Prime_DesktopTallHero_3000x1200._CB634746875_.jpg"
          alt="home_background_image" />

        <div className="home__row">
          <Product title="Ikigai : Japanese Art of staying Young.. While growing Old" 
          image="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg" 
          rating={4} 
          price = "12.2" />
          <Product />

        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />

        </div>

        <div className="home__row">
          <Product />

        </div>

      </div>
    </div>
  );
}

export default Home;
