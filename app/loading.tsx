import React from "react";

export default function Loading() {
    return (
        <div className="flex flex-col h-screen bg-neutral-900 px-2 py-2 text-white w-full animate-pulse">
            <div className="hidden md:block">
                <div className="flex flex-col h-screen bg-neutral-900 px-2 py-2 text-white overflow-hidden w-full">
                    <div className=" flex gap-3 w-full flex-1 min-h-0 ">
                        <div className="w-96 bg-neutral-800/40 rounded-2xl"></div>
                        <div className="flex-1 w-full h-full">
                            <div className="flex w-full flex-col h-full overflow-y-auto rounded-2xl">
                                <div className="flex w-full flex-col items-center justify-center p-4 space-y-8 ">
                                    <div className="w-full h-52 bg-neutral-800/60 rounded-2xl"></div>
                                    <div className="w-full h-96 bg-neutral-800/60 rounded-2xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Version */}
            <div className="block md:hidden h-screen">
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <div className="w-3/4 h-96 bg-neutral-800/60 rounded-2xl "></div>
                    <div className="w-3/4 h-48 bg-neutral-800/60 rounded-2xl "></div>
                </div>
            </div>
        </div>
    );
}
