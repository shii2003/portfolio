import React from 'react';
import { IoLocationSharp } from "react-icons/io5";

type InfoProps = {

};

const Info: React.FC<InfoProps> = () => {

    return (
        <div
            className="relative flex items-start justify-center h-[600px] w-[800px] bg-neutral-900 overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-[url('/worldmap.svg')] bg-contain bg-center bg-no-repeat opacity-40 
        [mask-image:radial-gradient(ellipse_85%_70%_at_center,white_60%,transparent_100%)]"
            />

            <div className="absolute z-20 w-2 h-2  rounded-full"
                style={{ left: "520px", top: "230px" }}
            >
                <IoLocationSharp className='text-red-500' size={30} />

            </div>

            <div className="absolute z-20 px-3 py-1 bg-neutral-800 text-white text-sm rounded-md border border-neutral-700"
                style={{ left: "510px", top: "200px" }}
            >
                Delhi, India.
            </div>
            <div className="relative z-10 text-9xl text-white font-[var(--font-bodoni)]">
                11:44
            </div>
        </div>
    )
}
export default Info;