import React from 'react';

type TopbarProps = {

};

const Topbar: React.FC<TopbarProps> = () => {

    return (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-6 py-3 rounded-xl shadow-xl flex gap-4 z-50 border border-neutral-700/50">
            <div>
                blog
            </div>
            <div>
                projects
            </div>
        </div>
    )
}
export default Topbar;