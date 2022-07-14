import React from 'react';
import "./Home.css"
import Product from './Product';
import { connect } from 'react-redux'

const Home = ({ products }) => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Xiaomi/Redmi10Prime/GW/BAU-13THJUNE/Rv/D45368762_INWLD-BAU_Redmi10Prime_DesktopTallHero_3000x1200._CB634746875_.jpg"
          alt="home_background_image" />

        <div className="home__row">


        </div>

        <div className="home__row">
          {
            products.map(prod =>
              <Product key = {prod.id} productData={prod} />
            )
          }

        </div>

        <div className="home__row">
          {/* <Product /> */}

        </div>

      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.shopReducer.products,
  }
};

export default connect(mapStateToProps)(Home);
