import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="data:image/png;base64,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" alt="header-logo" />

      </Link>
      <div className='header__option'>
        <span className='option__lineOne'>Deliver To</span>
        <span className='option__lineTwo'>Apurwa Kumari, Faridabad</span>
      </div>
      <div className="header__search">
        <input className='header__searchInput' type='text'></input>
        <SearchIcon className="header__searchIcon" fontSize="large" />
      </div>

      <div className="header__nav">
        <div className='header__option'>
          <span className='option__lineOne'>Hello Guest</span>
          <span className='option__lineTwo'>Sign In</span>

        </div>

        <div className='header__option'>
          <span className='option__lineOne'>Returns</span>
          <span className='option__lineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='option__lineOne'>Your</span>
          <span className='option__lineTwo'>Prime</span>
        </div>

        <Link to="checkout" ><div className="header__optionBasket">
          <ShoppingBasketIcon fontSize="large" />
          <span className="option__lineTwo header__basketCount">0</span>
        </div></Link>

      </div>
    </div>
  );
}

export default Header;
