"use client";
import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

type BottomAppBarProps = Record<string, never>;

const BottomAppBar: React.FC<BottomAppBarProps> = () => {
    const getScrollableParent = (element: HTMLElement | null): HTMLElement | null => {
        if (!element) return null;
        let current: HTMLElement | null = element.parentElement;
        while (current) {
            const style = window.getComputedStyle(current);
            const overflowY = style.overflowY;
            if (overflowY === 'auto' || overflowY === 'scroll') {
                return current;
            }
            current = current.parentElement;
        }
        return document.scrollingElement as HTMLElement | null;
    };

    const getVisibleTargetById = (id: string): HTMLElement | null => {
        const candidates = Array.from(document.querySelectorAll(`#${CSS.escape(id)}`)) as HTMLElement[];
        if (candidates.length === 0) return null;
        const isVisible = (el: HTMLElement) => {
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity || '1') === 0) return false;

            let node: HTMLElement | null = el;
            while (node) {
                const s = window.getComputedStyle(node);
                if (s.display === 'none' || s.visibility === 'hidden') return false;
                node = node.parentElement;
            }
            return el.getClientRects().length > 0;
        };
        return (candidates.find(isVisible) || candidates[0]) as HTMLElement | null;
    };

    const handleScrollTo = (id: string) => {
        if (typeof document === 'undefined') return;
        const target = getVisibleTargetById(id);
        if (!target) {
            window.location.hash = id;
            return;
        }

        const scrollParent = getScrollableParent(target);
        if (scrollParent) {
            const parentRect = scrollParent.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const offsetTop = targetRect.top - parentRect.top + scrollParent.scrollTop;
            scrollParent.scrollTo({ top: offsetTop, behavior: 'smooth' });
            return;
        }

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-6 py-3 rounded-xl shadow-xl flex gap-4 z-50 border border-neutral-700/50">
            <a
                href="https://github.com/shii2003"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center justify-center h-10 w-10 px-1 py-0.5 border-2 border-neutral-400 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300'
            >

                <BsGithub className='text-neutral-200' size={30} />
            </a>
            <a
                href="https://x.com/shiiiiiiii000"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center justify-center h-10 w-10 px-1 py-0.5 border-2 border-neutral-400 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300'>
                <FaSquareXTwitter className='text-neutral-200' size={30} />
            </a>
            <a
                href="mailto:shivaniteotia743@gmail.com"
                className='flex items-center justify-center h-10 w-10 px-1 py-0.5 border-2 border-neutral-400 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300'>
                <IoIosMail className='text-neutral-200' size={30} />
            </a>
            <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className='flex items-center justify-center  px-1 py-0.5 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300 gap-2 cursor-pointer'>
                <div className='text-neutral-200 font-semibold text-md'>
                    Projects
                </div>
            </button>
            <button
                type="button"
                onClick={() => handleScrollTo('blogs')}
                className='flex items-center justify-center  px-1 py-0.5 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 hover:border-neutral-300 gap-2 cursor-pointer'>
                <div className='text-neutral-200 font-semibold text-md'>
                    Blogs
                </div>
            </button>
        </div>
    )
}
export default BottomAppBar;