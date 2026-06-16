import React from 'react'

const AnimatedColorBg = () => {
  return (
    <div>
        {/* Animated Color Background */}
        <div className="h-64 bg-blue-500 animate-pulse"></div>
        <div className="h-64 bg-blue-500 animate-spin"></div>
        <div className="h-64 bg-blue-500 animate-ping"></div>
        <div className="h-64 bg-blue-500 animate-bounce"></div>
    </div>
  )
}

export default AnimatedColorBg