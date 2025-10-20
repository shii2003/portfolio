import React from 'react';

type FooterProps = Record<string, never>;

const Footer: React.FC<FooterProps> = () => {

    return (
        <div className='flex flex-col items-center justify-center w-full h-16 border-b border-neutral-800 text-neutral-400 mt-4 mb-16'>
            <div>
                made with ❤️ by Shivani
            </div>

            <div className='mt-2'>
                © 2025. All rights reserved.
            </div>
        </div>
    )
}
export default Footer;