/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react'

const Ball = (props) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-full">
      <img src={props.imgUrl} alt="Technology" className="w-16 h-16 object-contain" />
    </div>
  )
}

const BallCanvas = ({icon }) => {
  return ( 
    <div className="w-full h-full">
      <Ball imgUrl={icon}/>
    </div>
  )
}
export default BallCanvas