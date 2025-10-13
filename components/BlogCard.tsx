import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCardLogo from './ProjectCardLogo';

type BlogCardProps = {

};

const BlogCard: React.FC<BlogCardProps> = () => {

    return (
        <div
            className="
      relative flex flex-col rounded-md border border-neutral-700 px-3 py-3 
      overflow-hidden cursor-pointer 
      bg-[url('/new-background.png')] bg-cover bg-center
      before:absolute before:inset-0 
      before:bg-[radial-gradient(circle_at_center,theme(colors.neutral.800)_0%,theme(colors.neutral.900)_100%)] 
      before:opacity-70 before:pointer-events-none
      text-white
      "
        >
            <div className="relative z-10 space-y-1">
                <div className="flex  items-center justify-between">
                    <div className='text-lg font-semibold'>
                        Text
                    </div>
                    <div className='text-neutral-400'>
                        <FaExternalLinkAlt />
                    </div>
                </div>
                <div className="flex gap-2 rounded-md ">
                    <div className='flex rounded-md overflow-hidden'>
                        <Image
                            src={'/aws-bg.png'}
                            alt={"aws_background"}
                            width={100}
                            height={70}
                        />
                    </div>
                    <div className='text-sm text-neutral-300 break-all'>
                        kdslkdjlskdlskdjlskdjlskdjlskdjl;skdjlskdfslkdsldkj
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogCard;