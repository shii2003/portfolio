import React from 'react';
import Image from 'next/image';
import ProjectCardLogo from './ProjectCardLogo';

type ProjectCardProps = {

};

const ProjectCard: React.FC<ProjectCardProps> = () => {

    return (
        <div
            className="
        w-80 flex flex-col rounded-md border border-neutral-700 px-3 py-2 
        relative overflow-hidden
        bg-[url('/new-background.png')] bg-cover bg-center
        before:absolute before:inset-0 
        before:bg-radial-gradient before:from-neutral-700/60 before:to-transparent 
        before:opacity-80 before:pointer-events-none
      "
        >
            <div className="flex flex-col gap-2 relative z-10">
                <div className="text-lg font-bold text-white">
                    Project Title
                </div>

                {/* ✅ Fixed-size container for the image */}
                <div className="relative w-full h-40 rounded-md overflow-hidden border border-neutral-700">
                    <Image
                        src="/repo-image.png"
                        alt="repo image"
                        fill
                        className="object-cover"
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
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;