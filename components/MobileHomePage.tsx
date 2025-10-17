import React from 'react';
import Sidebar from './Sidebar';
import BottomAppBar from './BottomAppBar';
import ProjectsAndBlogComponent from './ProjectsAndBlogComponent';

type MobileHomePageProps = {

};

const MobileHomePage: React.FC<MobileHomePageProps> = () => {

    return (
        <div className='flex flex-col h-screen overflow-hidden text-white'>
            <div className='flex-1 overflow-y-auto pb-24'>
                <div className='flex flex-col gap-4 items-center justify-center mt-6'>
                    <Sidebar />
                    <ProjectsAndBlogComponent />
                </div>
            </div>
            <BottomAppBar />
        </div>
    )
}
export default MobileHomePage;