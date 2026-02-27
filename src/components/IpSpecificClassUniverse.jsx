import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const generateIp = (className) => {
    switch (className) {
        case 'A': return `${Math.floor(Math.random() * 127)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        case 'B': return `${Math.floor(Math.random() * 64) + 128}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        case 'C': return `${Math.floor(Math.random() * 32) + 192}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        case 'D': return `${Math.floor(Math.random() * 16) + 224}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        case 'E': return `${Math.floor(Math.random() * 16) + 240}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
        default: return '192.168.1.1';
    }
};

const IpLabelBall = ({ ip, colorClasses, shadowColors, color, position, delay, slow }) => {
    const swimClass = slow ? 'animate-universe-swim-alt' : 'animate-universe-swim';
    return (
        <div
            className={`absolute flex flex-col items-center gap-1 ${swimClass}`}
            style={{ left: position.left, top: position.top, animationDelay: delay }}
        >
            <div
                className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-full animate-float cursor-pointer shadow-lg flex items-center justify-center transition-transform hover:scale-110`}
                style={{ boxShadow: `0 0 15px rgba(${shadowColors[color]}, 0.5)` }}
            >
                <Icon icon="mdi:server-network" className="text-white text-xl animate-icon-float" />
            </div>
            <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white border border-white/10 font-mono shadow-md">
                {ip}
            </div>
        </div>
    );
};

const IpSpecificClassUniverse = ({ ipClass, onReturn }) => {
    const [ips, setIps] = useState([]);

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

    const classColors = {
        'A': 'blue',
        'B': 'green',
        'C': 'orange',
        'D': 'purple',
        'E': 'red'
    };

    useEffect(() => {
        const newIps = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            ip: generateIp(ipClass),
            color: classColors[ipClass] || 'blue',
            position: {
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`
            },
            delay: `-${Math.random() * 5}s`,
            slow: Math.random() > 0.5
        }));
        setIps(newIps);
    }, [ipClass]);

    return (
        <div className="space-bg h-screen w-screen font-sans text-white overflow-hidden fixed inset-0">
            {/* Exit Button */}
            <button
                onClick={onReturn}
                className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
            >
                <Icon icon="mdi:keyboard-backspace" className="text-2xl text-white" />
            </button>

            {/* Info */}
            <div className="fixed top-6 left-6 z-40 bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-1">
                    <Icon icon={`mdi:alpha-${ipClass.toLowerCase()}-circle`} className="text-3xl text-white mr-3" />
                    <h3 className="text-xl font-bold text-white">Class {ipClass} Universe</h3>
                </div>
                <p className="text-sm text-gray-300 ml-10">Countless IPs swimming in space</p>
            </div>

            {/* Universe Container */}
            <div className="relative z-10 h-full w-full overflow-hidden">
                {ips.map(ip => (
                    <IpLabelBall
                        key={ip.id}
                        {...ip}
                        colorClasses={colorClasses}
                        shadowColors={shadowColors}
                    />
                ))}
            </div>
        </div>
    );
};

export default IpSpecificClassUniverse;
