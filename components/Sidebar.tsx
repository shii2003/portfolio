import React from 'react';
import Image from 'next/image';
import LogoContainer from './LogoContainer';

type SidebarProps = {

};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className='flex flex-col border border-neutral-700 w-64  rounded-md px-2 py-2'>
            <div> Tech Stack</div>
            <div className='flex flex-col gap-2 mb-2'>
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
                </div>
            </div>
        </div>
    )
}
export default Sidebar;