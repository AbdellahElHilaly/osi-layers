import React from 'react';
import { Icon } from '@iconify/react';

const IpClassBall = ({
    className,
    onClick,
    icon,
    color = 'blue',
    position = { left: '50%', top: '50%' },
    size = 'w-32 h-32',
    animationDelay = '0s',
    name,
    range,
    prefix
}) => {
    const colorClasses = {
        blue: 'from-blue-500 to-blue-600',
        cyan: 'from-cyan-500 to-cyan-600',
        orange: 'from-orange-500 to-orange-600',
        green: 'from-green-500 to-green-600',
        red: 'from-red-500 to-red-600',
        purple: 'from-purple-500 to-purple-600',
        pink: 'from-pink-500 to-pink-600',
        yellow: 'from-yellow-500 to-yellow-600'
    };

    const shadowColors = {
        blue: '59, 130, 246',
        cyan: '6, 182, 212',
        orange: '245, 158, 11',
        green: '34, 197, 94',
        red: '239, 68, 68',
        purple: '168, 85, 247',
        pink: '236, 72, 153',
        yellow: '234, 179, 8'
    };

    return (
        <div
            className={`absolute flex flex-col items-center gap-3 ${className}`}
            style={{
                left: position.left,
                top: position.top,
                animationDelay: animationDelay,
                transform: 'translate(-50%, -50%)'
            }}
        >
            <div
                className={`relative flex items-center justify-center gap-2 ${size} bg-gradient-to-br ${colorClasses[color]} rounded-full animate-float cursor-pointer shadow-lg hover:scale-110 transition-transform`}
                style={{ boxShadow: `0 0 20px rgba(${shadowColors[color]}, 0.4)` }}
                onClick={onClick}
            >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colorClasses[color].split(' ')[0]}/20 to-transparent blur-sm`}></div>

                {/* Miniball 1: Class Letter */}
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-inner z-10">
                    <span className="text-white font-bold text-xl drop-shadow-md">{name.replace('Class ', '')}</span>
                </div>

                {/* Miniball 2: Prefix Length */}
                <div className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center border border-black/50 shadow-inner z-10">
                    <span className="text-white font-bold text-sm drop-shadow-md">{prefix || 'N/A'}</span>
                </div>
            </div>

            <div className="text-center bg-gray-900/60 backdrop-blur-sm rounded-lg p-2 border border-white/10 z-20">
                <h3 className="font-bold text-white text-lg">{name}</h3>
                <p className="text-gray-300 text-sm whitespace-nowrap">{range}</p>
            </div>
        </div>
    );
};

export default IpClassBall;
