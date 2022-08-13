import React, { useEffect } from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar(userData) {
  useEffect(()=> {
    console.log(userData)
  }, [])


  return (
    <div className='sidebar'>
      <SidebarRow src={""} 
      title="MuhammadDin"/>
      <SidebarRow Icon={LocalHospitalIcon}
      title="covid 19 Info center"/>
      <SidebarRow Icon={EmojiFlagsIcon}
      title="pages"/>
      <SidebarRow Icon={EmojiPeopleIcon}
      title="Friends"/>
      <SidebarRow Icon={ChatIcon}
      title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon}
      title="Market Place"/>
      <SidebarRow Icon={VideoLibraryIcon}
      title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon}
      title="MarketPlace"/>
      
    </div>
  )
}

export default Sidebar
