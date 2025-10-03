import React from 'react';
import Image from 'next/image';

type LogoContainerProps = {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
};

const LogoContainer: React.FC<LogoContainerProps> = ({
    src,
    alt = "Logo",
    height = 35,
    width = 35,
}) => {

    return (
        <div
            className=' flex border border-neutral-600 rounded-md px-1 py-0.5 bg-neutral-500/50'
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
export default LogoContainer;