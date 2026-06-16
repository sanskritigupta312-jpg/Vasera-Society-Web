import React from 'react'

const FloatingShapesBg = () => {
  return (
    <div>
        <div className="relative h-screen bg-slate-900 overflow-hidden">
            <div className="absolute w-24 h-24 bg-red-500 rotate-45 animate-bounce top-20 left-20"></div>
            <div className="absolute w-32 h-32 bg-blue-500 rounded-full animate-pulse right-20 bottom-20"></div>
        </div>
    </div>
  )
}

export default FloatingShapesBg