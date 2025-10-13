"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";

type InfoProps = {

};

const getIndianTime = () => {
    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(new Date());
};

const Info: React.FC<InfoProps> = () => {

    const [time, setTime] = useState(getIndianTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getIndianTime());
        }, 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative flex items-start justify-center h-[400px] w-[500px] lg:h-[600px] lg:w-[800px] bg-neutral-900 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-[url('/worldmap.svg')] bg-contain bg-center bg-no-repeat opacity-40 
        [mask-image:radial-gradient(ellipse_85%_70%_at_center,white_60%,transparent_100%)]"
            />

            <div className="absolute z-20 w-2 h-2  rounded-full"
                style={{ left: "65%", top: "38%" }}
            >
                <IoLocationSharp className='text-red-500' size={30} />

            </div>

            <div className="absolute z-20 px-3 py-1 bg-neutral-800 text-white text-sm rounded-md border border-neutral-700"
                style={{ left: "63%", top: "31%" }}
            >
                Delhi, India.
            </div>
            <div className="relative z-10 text-7xl lg:text-9xl text-white font-[var(--font-bodoni)]  flex gap-0 lg:gap-4 ">
                {time.split("").map((char, idx) => (
                    <div key={idx} className="relative w-[70px] h-[130px] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={char}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 100, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 15,
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {char}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Info;