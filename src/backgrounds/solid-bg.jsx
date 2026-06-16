import React from 'react';

const solidBg = () => {
    return(
        <div>
            {/* Simple solid background component */}
            {/* <div className="bg-blue-500 text-white h-screen"></div> */}
            {/* Simple solid background component with opacity */}
            <div className="bg-blue-500/20 h-screen hover:bg-blue-500/40 transition-all duration-500"></div>
        </div>
    )
};

export default solidBg;