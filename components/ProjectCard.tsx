"use client";
import React from 'react';
import Image from 'next/image';
import ProjectCardLogo from './ProjectCardLogo';
import { motion } from 'framer-motion';

type ProjectCardProps = {

};

const ProjectCard: React.FC<ProjectCardProps> = () => {

    return (
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
                        src="/repo-image.png"
                        alt="repo image"
                        fill
                        className="object-cover transition-transform duration-700"
                    />
                </div>

                <div className="text-neutral-300">hello</div>
                <div className="text-neutral-400">slkdlskdlsd</div>

                <div className="flex gap-2 mt-2">
                    <ProjectCardLogo src="/Nodejs.svg" alt="nodejs" width={30} height={30} />
                    <ProjectCardLogo src="/next-js.svg" alt="nextjs" width={30} height={30} />
                    <ProjectCardLogo src="/TailwindCSS.svg" alt="tailwindcss" width={30} height={30} />
                    <ProjectCardLogo src="/Typescript.svg" alt="typescript" width={30} height={30} />
                    <ProjectCardLogo src="/postgresql.svg" alt="postgresql" width={30} height={30} />
                    <ProjectCardLogo src="/redis.svg" alt="redis" width={30} height={30} />
                </div>
            </div>
        </motion.div>
    );
}
export default ProjectCard;