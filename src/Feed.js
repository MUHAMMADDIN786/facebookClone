import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <StoryReel/>
      <MessageSender/>

      <Post profilePic='https://avatars.githubusercontent.com/u/24712956?v=4'
      message={'wow this is working'}
      timestamp='this is for time being'
      username={'Azzadaamir'}
      image="https://pbs.twimg.com/card_img/1557449590839791616/EggRhR1H?format=jpg&name=large"
      />
      
    </div>
  )
}

export default Feed
