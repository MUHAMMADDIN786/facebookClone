import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'></img>
        <div className='header__input'>
          <SearchIcon/>
          <input type='text' placeholder='search facebook' />
        </div>
      </div>
      <div className='header__middle'>
        <div className='header__option header__option--active'>
        <FlagIcon fontSize='large'/>

        </div>
        <div className='header__option'>
        <SubscriptionsOutlinedIcon fontSize='large'/>

        </div>
        <div className='header__option'>
        <StorefrontOutlinedIcon fontSize='large'/>

        </div>
        <div className='header__option'>
        <SupervisedUserCircleOutlinedIcon fontSize='large'/>

        </div>
      </div>
      <div className='header__right'>
      <div className='header__info'>
        <Avatar src=''/>
        <h4>MuhammadDin</h4>
      </div>
      <IconButton>
        <AddIcon/>
      </IconButton>
      <IconButton>
        <ForumIcon/>
      </IconButton>
      <IconButton>
        <NotificationsNoneIcon/>
      </IconButton>
      <IconButton>
        <ExpandMoreIcon/>
      </IconButton>

      </div>

    </div>
  )
}

export default Header
