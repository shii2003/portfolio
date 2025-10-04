import React from 'react';
import Image from 'next/image';
import LogoContainer from './LogoContainer';
import { IoLocationSharp, IoSchoolSharp } from "react-icons/io5";

type SidebarProps = {

};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className='flex flex-col border border-neutral-700 w-64  rounded-md px-2 py-2 ml-3'>
            <div> Tech Stack</div>
            <div className='flex flex-col gap-2 mb-2'>
                <div className='flex flex-col'>
                    <div
                        className=' flex rounded-md  overflow-hidden'
                        style={{ height: 100, width: 100 }}
                    >
                        <Image
                            src={"/pfp.png"}
                            alt='pfp'
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <div>Shivani Teotia</div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <IoSchoolSharp className='text-blue-300' />
                            </div>
                            <div>
                                Bennett University, Noida, India.
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <IoLocationSharp className='text-red-500' />
                            </div>
                            <div>
                                Delhi, India.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Languages
                </div>
                <div className=' flex gap-2'>
                    <LogoContainer src='/c.svg' alt='c logo' />
                    <LogoContainer src='/c++.svg' alt='c logo' />
                    <LogoContainer src='/javascript.svg' alt='c logo' />
                    <LogoContainer src='/python.svg' alt='c logo' />
                    <LogoContainer src='/typescript.svg' alt='c logo' />
                </div>
                <div>
                    Frameworks
                </div>
                <div className=' flex gap-2'>
                    <LogoContainer src='/react.svg' alt='c logo' />
                    <LogoContainer src='/Next.js.svg' alt='c logo' />
                    <LogoContainer src='/redux.svg' alt='c logo' />
                    <LogoContainer src='/TailwindCSS.svg' alt='c logo' />
                    <LogoContainer src='/Nodejs.svg' alt='c logo' />
                </div>
                <div>
                    Databases
                </div>
                <div className=' flex gap-2'>
                    <LogoContainer src='/postgresql.svg' alt='c logo' />
                    <LogoContainer src='/redis.svg' alt='c logo' />
                    <LogoContainer src='/MongoDB.svg' alt='c logo' />
                </div>
                <div>
                    Cloud
                </div>
                <div className=' flex gap-2'>
                    <LogoContainer src='/Docker.svg' alt='c logo' />
                    <LogoContainer src='/amazon.svg' alt='c logo' />
                    <LogoContainer src='/Kubernetes.svg' alt='c logo' />
                    <LogoContainer src='/awslambda.svg' alt='c logo' />
                </div>
            </div>
        </div>
    )
}
export default Sidebar;