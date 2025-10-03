import React from 'react';

type BottomAppBarProps = {

};

const BottomAppBar: React.FC<BottomAppBarProps> = () => {

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-6 py-3 rounded-xl shadow-xl flex gap-4 z-50 border border-neutral-700/50">
            <button className="px-4 py-2 bg-blue-600 rounded">Home</button>
            <button className="px-4 py-2 bg-green-600 rounded">Search</button>
            <button className="px-4 py-2 bg-red-600 rounded">Profile</button>
        </div>
    )
}
export default BottomAppBar;