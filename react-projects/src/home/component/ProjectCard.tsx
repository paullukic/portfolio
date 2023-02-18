import * as React from 'react';
import { Link } from "react-router-dom";


export interface ProjectCardProps {
    title: string;
    imageUrl: string;
    linkTo: string;
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <a href={props.linkTo} target="_blank" className='relative'>
            <img className='object-cover object-top overflow-hidden min-h-[300px] max-h-[300px] w-[500px] shadow-lg rounded-xl' src={props.imageUrl} alt='hackernews' />
            <div className='flex flex-col justify-center items-center absolute bottom-2 left-3 z-30'>
                <h2 className='font-bold text-gray-800 dark:text-slate-400'>{props.title}</h2>
               
            </div>
             {/* gradient from bottom to top */}
             <div className='absolute bottom-[-1px] rounded-[11px] w-full h-full bg-gradient-to-t from-slate-200 dark:from-stone-800  z-20 to-transparent'></div>
        </a>
    );
}
