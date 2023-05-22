import React from 'react'

const WhatWeDo = ({props}) => {
  console.log("props : ",props)
  return (
    <div className='container_wrapper'>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default WhatWeDo
