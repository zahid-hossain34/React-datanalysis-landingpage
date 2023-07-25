import React from 'react'
import '../App.css'

function SocialMedia  ( props)  {
const width = props.style?.width || '72px'
const height = props.style?.height || '72px'
const imgSrc = props.imageSrc || 'https://via.placeholder.com/72x72'
   
  return (
 
    <div className="w-[141.76px] h-[141.76px] bg-white rounded-[20px]  shadow-custome  border  border-custome   flex justify-center items-center flex-col gap-3" >
        <img className={`w-${width}  h-${height}`} src={imgSrc} alt="" />
        {props.children}
    </div>
  )
}

export default SocialMedia
