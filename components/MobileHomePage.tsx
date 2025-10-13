import React from 'react';
import Sidebar from './Sidebar';
import BottomAppBar from './BottomAppBar';
import ProjectCard from './ProjectCard';
import BlogCard from './BlogCard';

type MobileHomePageProps = {

};

const MobileHomePage: React.FC<MobileHomePageProps> = () => {

    return (
        <div className='flex flex-col text-white'>
            <div className='flex flex-col gap-4 items-center justify-center mt-6'>
                <Sidebar />
                <div className='flex flex-col items-center justify-center '>
                    <div className="flex items-start text-lg px-2 py-2 font-semibold border-b border-neutral-700">
                        PROJECTS
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6  justify-center items-center ">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div className="flex items-start text-lg px-2 py-2 font-semibold border-b border-neutral-700 ">
                        BLOG
                    </div>
                    <div className="flex flex-col gap-6 mt-4 mb-6 items-start px-2 py-2 " >
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>
            <BottomAppBar />
        </div>
    )
}
export default MobileHomePage;