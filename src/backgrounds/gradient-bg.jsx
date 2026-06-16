import React from 'react'

const GradientBg = () => {
  return (
    <div>
        <h1 className='text-xl bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'>Linear Gradient Background</h1>
        {/* Linear Gradient Background */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-64 hover:from-pink-500 hover:to-blue-500 transition-all duration-500"></div>
        <hr></hr>
        <div className="bg-gradient-to-l from-blue-500 to-purple-600 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-t from-blue-500 to-purple-600 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-b from-blue-500 to-purple-600 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-tr from-blue-500 to-purple-600 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-tl from-blue-500 to-purple-600 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-bl from-blue-500 to-purple-600 h-64"></div>
        <hr></hr>
        {/* Multiple colors */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 h-64"></div>
        <hr></hr>
        <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 h-64"></div>
        {/* Radial Gradient Background - Circular Background */}
        <h1 className='text-xl bg-gradient-to-r from-pink-500 to-purple-800 bg-clip-text text-transparent'>Radial Gradient Background</h1>
        <div className="bg-radial from-blue-500 to-black h-64"></div>
        <hr></hr>
        {/* Change center size */}
        <div className="bg-radial-[at_30%_30%] from-blue-500 to-black h-64"></div>
        <hr></hr>
        <div className="w-80 h-80 rounded-full bg-radial from-cyan-400 to-transparent blur-3xl"></div>
        <hr></hr>
        {/* Conic Gradient Background */}
        <h1 className="text-xl bg-gradient-to-l from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Conic Gradient Background</h1>
        <div className="h-64 bg-conic from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  )
}

export default GradientBg;