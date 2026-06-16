import React from 'react'
import { useState } from 'react';
import hero from "../assets/hero1.jpg";

const BgImage = () => {
    const [bg,setBg] = useState(hero);
  return (
    <div>
        {/* <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('/hero.jpg')` }}> */}
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            {/* <div className="absolute inset-0 bg-black/50"></div> */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="relative z-10 text-white p-4">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus similique aut, dolorem deleniti aliquid voluptatum dicta eius alias. Ea cum quia maxime placeat nulla facilis laboriosam debitis error natus cupiditate?</p>
                <button className=" mt-2 p-2 bg-gradient-to-r from-yellow-200 to-green-200 text-black hover:bg-gray-200 rounded-xl cursor-pointer" onClick={() => setBg(bg === hero ? "/hero2.jpg":hero)}>Change Background</button>
            </div>
        </div>
        
    </div>
  )
};

export default BgImage;