import React from 'react';
import { Icon } from '@iconify/react';
import IpClassBall from './IpClassBall';

const IpClassesUniverse = ({
    onReturn,
    onClassClick
}) => {
    return (
        <div className="space-bg h-screen w-screen font-sans text-white overflow-hidden fixed inset-0">
            {/* Exit Button */}
            <button
                onClick={onReturn}
                className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
            >
                <Icon icon="mdi:close" className="text-2xl text-white" />
            </button>

            {/* Info */}
            <div className="fixed top-6 left-6 z-40 bg-purple-900/30 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30">
                <div className="flex items-center mb-2">
                    <Icon icon="eos-icons:network" className="text-2xl text-purple-400 mr-3" />
                    <h3 className="text-lg font-bold text-purple-300">IP Classification</h3>
                </div>
                <p className="text-sm text-gray-300">Choose an IP Class to explore</p>
            </div>

            {/* Universe Container */}
            <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
                <IpClassBall
                    className="animate-universe-swim"
                    onClick={() => onClassClick('A')}
                    icon="mdi:alpha-a-circle-outline"
                    color="blue"
                    position={{ left: '30%', top: '30%' }}
                    name="Class A"
                    range="0.0.0.0 - 127.255.255.255"
                    prefix="/8"
                />
                <IpClassBall
                    className="animate-universe-swim-alt"
                    onClick={() => onClassClick('B')}
                    icon="mdi:alpha-b-circle-outline"
                    color="green"
                    position={{ left: '70%', top: '25%' }}
                    name="Class B"
                    range="128.0.0.0 - 191.255.255.255"
                    prefix="/16"
                />
                <IpClassBall
                    className="animate-universe-swim"
                    onClick={() => onClassClick('C')}
                    icon="mdi:alpha-c-circle-outline"
                    color="orange"
                    position={{ left: '50%', top: '50%' }}
                    name="Class C"
                    range="192.0.0.0 - 223.255.255.255"
                    prefix="/24"
                />
                <IpClassBall
                    className="animate-universe-swim-alt"
                    onClick={() => onClassClick('D')}
                    icon="mdi:alpha-d-circle-outline"
                    color="purple"
                    position={{ left: '25%', top: '70%' }}
                    name="Class D"
                    range="224.0.0.0 - 239.255.255.255"
                    prefix="MC"
                />
                <IpClassBall
                    className="animate-universe-swim"
                    onClick={() => onClassClick('E')}
                    icon="mdi:alpha-e-circle-outline"
                    color="red"
                    position={{ left: '75%', top: '75%' }}
                    name="Class E"
                    range="240.0.0.0 - 255.255.255.255"
                    prefix="RS"
                />
            </div>
        </div>
    );
};

export default IpClassesUniverse;
