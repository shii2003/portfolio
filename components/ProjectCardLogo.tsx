import React from 'react';
import Image from 'next/image';

type ProjectCardLogoProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

const ProjectCardLogo: React.FC<ProjectCardLogoProps> = ({
    src,
    alt = "Logo",
    width = 40,
    height = 40
}) => {

    return (
        <div
            className='flex  rounded-md px-1 border border-neutral-700 bg-neutral-700 py-0.5'
            style={{ width, height }}
        >
            <Image
                src={src}
                alt={alt}
                height={height}
                width={width}
            />

        </div>
    )
}
export default ProjectCardLogo;