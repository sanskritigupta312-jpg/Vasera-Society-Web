import React from 'react'
import { useState, useEffect } from 'react';

const AutoBgChange = () => {
    const images = [
        "/hero.jpg",
        "/hero2.jpg",
        "/hero3.png"
    ];
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex(prev=>(prev+1)%images.length);
        }, 2000);
        return()=>clearInterval(interval);
    },[]);
  return (
    <div>
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage:`url(${images[index]})` }}>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"> */}
            <div className="absolute inset-0 bg-black/50">
                <div className="relative z-10 text-white p-4">
                    <h1>Welcome</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus similique aut, dolorem deleniti aliquid voluptatum dicta eius alias. Ea cum quia maxime placeat nulla facilis laboriosam debitis error natus cupiditate?</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AutoBgChange;