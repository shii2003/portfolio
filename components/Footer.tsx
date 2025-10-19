import React from 'react';

type FooterProps = {

};

const Footer: React.FC<FooterProps> = () => {

    return (
        <div className='flex items-center justify-center w-full h-16 border-b border-neutral-800 text-neutral-400 mt-4 mb-16'>
            made with ❤️ by Shivani
        </div>
    )
}
export default Footer;