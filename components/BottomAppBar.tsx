import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

type BottomAppBarProps = {

};

const BottomAppBar: React.FC<BottomAppBarProps> = () => {

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-6 py-3 rounded-xl shadow-xl flex gap-4 z-50 border border-neutral-700/50">
            <div className='flex items-center justify-center h-10 w-10 px-1 py-0.5 border-2 border-neutral-400 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300'>
                <BsGithub className='text-neutral-200' size={30} />
            </div>
            <div className='flex items-center justify-center h-10 w-10 px-1 py-0.5 border-2 border-neutral-400 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300'>
                <FaSquareXTwitter className='text-neutral-200' size={30} />
            </div>
            <div className='flex items-center justify-center h-10 w-10 px-1 py-0.5 border-2 border-neutral-400 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300'>
                <IoIosMail className='text-neutral-200' size={30} />
            </div>
        </div>
    )
}
export default BottomAppBar;