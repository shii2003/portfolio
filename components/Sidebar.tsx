import React from 'react';
import Image from 'next/image';
import LogoContainer from './LogoContainer';
import { IoLocationSharp, IoSchoolSharp } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";

type SidebarProps = {

};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className='flex flex-col border border-neutral-700 max-w-96 rounded-md px-2 py-2 ml-2 md:ml-7 bg-neutral-800/30'>
            <div className='mb-2 font-bold text-lg'>Shivani Teotia </div>
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
                        <div>

                        </div>
                    </div>
                    <div className='flex flex-col gap-0.5 mt-4'>
                        <div className='flex flex-col items-center gap-2'>
                            <div>
                                - I’m a full-stack developer I love building scalable and high-performance web systems.
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
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
                    <LogoContainer src='/next-js.svg' alt='nextjs' />
                    <LogoContainer src='/redux.svg' alt='redux' />
                    <LogoContainer src='/TailwindCSS.svg' alt='tailwindcss' />
                    <LogoContainer src='/Nodejs.svg' alt='nodejs' />
                </div>
                <div>
                    Databases
                </div>
                <div className=' flex gap-2'>
                    <LogoContainer src='/postgresql.svg' alt='postgresql' />
                    <LogoContainer src='/redis.svg' alt='redis' />
                    <LogoContainer src='/MongoDB.svg' alt='mongodb' />
                </div>
                <div>
                    Cloud
                </div>
                <div className=' flex gap-2'>
                    <LogoContainer src='/docker-logo.svg' alt='docker' />
                    <LogoContainer src='/awslogo.svg' alt='aws' />
                    <LogoContainer src='/kubernetes.svg' alt='kubernetes' />
                    <LogoContainer src='/awslambda.svg' alt='lambda' />
                </div>
            </div>
        </div>
    )
}
export default Sidebar;