"use client";
import React from 'react';
import Image from 'next/image';
import ProjectCardLogo from './ProjectCardLogo';
import { motion } from 'framer-motion';

type techLogoType = {
    src: string,
    alt: string,
}

type ProjectCardProps = {
    repoImageSrc: string,
    techLogos: techLogoType[],
    title: string,
    details: string[],
    githubLink: string,
    isInProgress?: boolean,
};

const ProjectCard: React.FC<ProjectCardProps> = (
    { repoImageSrc,
        techLogos,
        title,
        details,
        githubLink,
        isInProgress = false }
) => {

    return (
        <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.div
                className="
      w-80 flex flex-col rounded-md border border-neutral-700 px-2 py-2 
      relative overflow-hidden cursor-pointer 
      bg-[url('/new-background.png')] bg-cover bg-center
      before:absolute before:inset-0 
      before:bg-[radial-gradient(circle_at_center,theme(colors.neutral.600)_0%,theme(colors.neutral.900)_100%)] 
      before:opacity-70 before:pointer-events-none
      "
                whileHover={{ scale: 1.05 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                    duration: 0.4,
                }}
            >
                <div className="flex flex-col gap-2 relative z-10">
                    <div className="relative w-full h-40 rounded-md overflow-hidden border border-neutral-700">
                        <Image
                            src={repoImageSrc}
                            alt="repo image"
                            fill
                            className="object-cover transition-transform duration-700"
                        />
                    </div>

                    <div className="flex gap-2 justify-between text-neutral-300">
                        <div>
                            {title}
                        </div>
                        {isInProgress ?
                            (
                                <div className='flex  gap-1  items-center justify-between bg-green-400/30 text-xs px-2 rounded-lg'>
                                    <div className='text-green-300'>
                                        In Progress
                                    </div>
                                </div>
                            ) : (
                                <div>

                                </div>
                            )}

                    </div>
                    {details.map((text, idx) => (
                        <div
                            key={idx}
                            className="text-neutral-400"
                        >
                            {text}
                        </div>
                    ))
                    }

                    <div className="flex gap-2 mt-2">
                        {
                            techLogos.map((logo, idx) => (
                                <ProjectCardLogo
                                    key={idx}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={30}
                                    height={30}
                                />
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </a>
    );
}
export default ProjectCard;