import React from 'react'
import './index.css'
import EastIcon from '@mui/icons-material/East';

const WhatWeDo = ({props}) => {
  console.log("props : ",props)
  return (
    <div className='container_wrapper'>
      <h2 className='what-heading'>{props.heading}</h2>
      <p>{props.content}</p>
      <a href="https://info.sriya.ai/academy/">
        <p className='what-contact-btn'>Contact Us <EastIcon/></p>
      </a>
    </div>
  )
}

export default WhatWeDo
