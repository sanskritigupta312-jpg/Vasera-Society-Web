import React from 'react'

const AnimatedGradientBg = () => {
  return (
    <div>
        {/* Animated Gradient Background */}
        <div className="h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
        <div className="h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-gradient"></div>
        <div className='h-64 bg-gradient-to-l from-pink-500 via-purple-500 to-blue-500 animate-pulse'></div>
        <div className='h-64 bg-gradient-to-l from-blue-500 to-pink-400'></div>
    </div>
  )
}

export default AnimatedGradientBg