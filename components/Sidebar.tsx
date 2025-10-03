import React from 'react';

type SidebarProps = {

};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className='flex flex-col border border-neutral-700 w-64  rounded-md px-2 py-1'>
            <div> hello</div>
            <div>
                my name is
            </div>
        </div>
    )
}
export default Sidebar;