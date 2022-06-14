import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
                className="header__logo"
                src="https://icon2.cleanpng.com/20180407/wsw/kisspng-tinder-logo-computer-icons-bumble-mango-vector-5ac8b247d76467.5183554815231022798823.jpg"
                alt=""
            />
            
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>


        </div>
    );
}

export default Header;