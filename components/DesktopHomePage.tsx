import React from 'react';
import Sidebar from './Sidebar';
import Info from './Info';
import ProjectCard from './ProjectCard';
import BlogCard from './BlogCard';
import BottomAppBar from './BottomAppBar';

type DesktopHomePageProps = {

};

const DesktopHomePage: React.FC<DesktopHomePageProps> = () => {

    return (
        <div className=" flex flex-col h-screen bg-neutral-900 px-2 py-2 text-white overflow-hidden w-full">
            <div className="p-3"></div>
            <div className="flex gap-3 w-full flex-1 min-h-0">
                <div className="">  <Sidebar /></div>
                <div className="flex-1 w-full">
                    <div className="flex w-full flex-col mt-9 h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-neutral-800 rounded-2xl">
                        <div className="flex w-full flex-col items-center justify-center p-4 ">
                            <div className='flex items-center justify-center'>
                                <Info />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center text-lg px-2 py-2 font-semibold border-b border-neutral-700">
                                    PROJECTS
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 mb-6  justify-center items-center">
                                    <ProjectCard />
                                    <ProjectCard />
                                    <ProjectCard />
                                    <ProjectCard />
                                </div>
                                <div className="flex items-center text-lg px-2 py-2 font-semibold border-b border-neutral-700">
                                    BLOG
                                </div>
                                <div className="flex flex-col gap-6 mt-4 mb-6 items-start px-2 py-2 " >
                                    <BlogCard />
                                    <BlogCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomAppBar />
        </div>
    )
}
export default DesktopHomePage;