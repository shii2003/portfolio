import BlogCard from '@/components/BlogCard';
import BottomAppBar from '@/components/BottomAppBar';
import DesktopHomePage from '@/components/DesktopHomePage';
import Info from '@/components/Info';
import MobileHomePage from '@/components/MobileHomePage';
import ProjectCard from '@/components/ProjectCard';
import Sidebar from '@/components/Sidebar';
import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='h-screen max-w-[2560px]'>
            <div className='hidden md:block'>
                <DesktopHomePage />
            </div>
            <div className='block md:hidden'>
                <MobileHomePage />
            </div>
        </div>

    )
}
export default page;