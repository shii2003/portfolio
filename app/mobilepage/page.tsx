import MobileHomePage from '@/components/MobileHomePage';
import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='border border-white'>
            <MobileHomePage />
        </div>
    )
}
export default page;