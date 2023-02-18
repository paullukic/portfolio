import * as React from 'react';
import { Link } from "react-router-dom";


export interface ProjectCardProps {
    title: string;
    imageUrl: string;
    linkTo: string;
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <a href={props.linkTo} target="_blank" className='relative lg:grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-110 hover:z-50 z-20'>
            <img className='object-cover object-top overflow-hidden min-h-[300px] max-h-[300px] w-[500px] shadow-lg rounded-xl' src={props.imageUrl} alt='hackernews' />
            <div className='flex flex-col justify-center items-center absolute bottom-2 left-3 z-30'>
                <h2 className='font-bold text-gray-300'>{props.title}</h2>
            </div>
             {/* gradient from bottom to top */}
             <div className='absolute bottom-[-1px] rounded-b-[11px] w-full h-10 backdrop-blur-2xl backdrop-brightness-50 z-20'></div>
        </a>
    );
}
