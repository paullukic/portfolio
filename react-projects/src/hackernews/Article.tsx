import { useEffect } from "react";
import Navigation from "./Navigation";

interface ArticleProps {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    callback: (id: number) => void;
}


const Article = (props: ArticleProps) => {
    return (
        <>
            <div className="relative text-white backdrop-blur-sm" >
                <div className="m-auto left-0 top-50 right-0 bg-gray-900 bg-opacity-60 rounded-t-lg">
                    <div className={`p-2 opacity-80 ${props.url ? 'text-amber-500 cursor-pointer' : 'text-cyan-400'} w-fullrounded-t-lg`} 
                            onClick={() => { if(props.url) window.open(props.url, "_blank") }}>
                        <p className="truncate max-w-fit rounded-t-lg ">{props.title}</p>
                    </div>
                    <div className="p-2 bottom-0 bg-gray-800 bg-opacity-40 text-sm 
                                    md:grid md:grid-flow-column md:grid-cols-3 md:grid-rows-1
                                    sm:flex">
                                    
                        <p className="opacity-25 justify-self-start">{props.by}</p>
                        <p className="opacity-25 grow">{props.time}</p>
                        <p className="opacity-50 justify-self-end cursor-pointer text-right" onClick={
                            () => props.callback(props.id)
                        }>Comments: {props.descendants}</p>
                    </div>
                </div >
            </div >
        </>
    );
}

export default Article;