import * as React from 'react';
import { Link } from "react-router-dom";


export interface ProjectCardProps {
    title: string;
    imageUrl: string;
    linkTo: string;
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <Link to={props.linkTo}>
        <div className='my-1 px-1 lg:my-4 lg:px-4'>
            <div className="w-64 h-64 bg-red-100 relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url(" + props.imageUrl + ")" }}></div>
                <div className="opacity-50 hover:opacity-80 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">
                    {props.title}
                </div>
            </div>
        </div>
        </Link>
    );
}
