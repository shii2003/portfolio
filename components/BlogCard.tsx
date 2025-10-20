import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCardLogo from './ProjectCardLogo';

type BlogCardProps = {
    srcImg: string,
    altImg: string,
    title: string,
    details: string[],
    blogLink: string,
};

const BlogCard: React.FC<BlogCardProps> = (
    { srcImg,
        altImg,
        title,
        details,
        blogLink }
) => {

    return (
        <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div
                className="
      relative flex flex-col rounded-md border border-neutral-700 px-3 py-3 
      overflow-hidden cursor-pointer 
      bg-[url('/new-background.png')] bg-cover bg-center
      before:absolute before:inset-0 
      before:bg-[radial-gradient(circle_at_center,theme(colors.neutral.800)_0%,theme(colors.neutral.900)_100%)] 
      before:opacity-70 before:pointer-events-none
      text-white hover:bg-neutral-600/50
      "
            >
                <div className="relative z-10 space-y-1">
                    <div className="flex  items-center justify-between">
                        <div className='text-lg font-semibold'>
                            {title}
                        </div>
                        <div className='text-neutral-400 hover:text-white transform transition-transform duration-300 ease-in-out hover:scale-110'>
                            <FaExternalLinkAlt />
                        </div>
                    </div>
                    <div className="flex gap-2 rounded-md ">
                        <div className='flex items-center justify-center rounded-md overflow-hidden border-2 border-neutral-600 w-[100px] h-[65px]   /* 👈 Fixed size */
                md:w-[120px] md:h-[80px]'>
                            <Image
                                src={srcImg}
                                alt={altImg}
                                width={100}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                        <div className='flex flex-col'>
                            {details?.map((detail, idx) => (
                                <div
                                    key={idx}
                                    className='text-sm text-neutral-300 break-all'>
                                    {detail}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </a>
    )
}
export default BlogCard;