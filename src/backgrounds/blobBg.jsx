import React from 'react'
import { motion } from 'framer-motion';

const BlobBg = () => {
  return (
    <div>
        <div className="relative h-screen bg-black overflow-hidden">
            {/* <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-50"></div> */}
            {/* <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-50"></div> */}
            {/* <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50 animate-pulse"></div> */}
            {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-40 animate-pulse"></div> */}
            {/* <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50 animate-blob"></div> */}
            {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-40 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[140px] opacity-40 animate-blob animation-delay-2000"></div> */}
            {/* <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-50 animate-bounce top-10 left-10"></div>
            <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 bottom-10 right-10 animate-pulse"></div> */}
            {/* <motion.div
             animate={{
               x:[0,80,-40,0],
               y:[0,-60,30,0]
            }}
            transition={{
               duration: 10,
               repeat:Infinity
            }}
            className="absolute w-[500px] h-screen bg-purple-500 rounded-full blur-[140px] opacity-40"
           ></motion.div> */}
       </div>
       
    </div>
  )
}

export default BlobBg