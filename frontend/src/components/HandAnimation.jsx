// HandAnimation.js

import React from 'react';

const HandAnimation = () => {
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 animate-bounce">
            {/* Customize the hand animation or use an SVG animation library */}
            <div className="w-6 h-6 border-t-4 border-r-4 border-white transform rotate-45"></div>
        </div>
    );
};

export default HandAnimation;