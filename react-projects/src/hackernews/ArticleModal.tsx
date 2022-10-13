import { useEffect, createElement } from "react";
import { ArticleCommentType } from "./constants/constants";

export interface ArticleModalProps {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    comments: ArticleCommentType[];
}

const ArticleModal = (props: ArticleModalProps) => {
    const reactElementFromString = (string: string) => {
        return createElement('p', { dangerouslySetInnerHTML: { __html: string }, className: 'higlight-link', style: { maxWidth: '70vw' } });
    }

    return (
        <>
            <div id='modal' className="fixed inset-0 h-full bg-black opacity-80"></div>
            
            <button id='close-modal' className="fixed top-0 right-0 m-4 text-white text-2xl font-bold">X</button>



            <div className="fixed left-1/2 -translate-x-1/2 w-full h-full mx-auto 
                      bg-cyan-500 bg-opacity-10 rounded-xl backdrop-blur-md"
                style={{ maxHeight: '80vh', width: '77vw' }}></div>


            <div className="fixed left-1/2 -translate-x-1/2 inset-0 z-10 overflow-x-hidden top-20 customScroll"
                style={{ maxHeight: '80vh', width: '77vw' }}>

                <div className="flex items-center">
                    <div className="relative mx-auto" style={{ maxWidth: '77vw', maxHeight: '80vh' }}>
                        <div className="flex">
                            <div className="sm:mt-6 sm:mx-6 p-1 sm:text-left">
                                <h4 className="text-lg font-medium text-amber-500"> {props.title} </h4>
                                {/* comments */}
                                <div className="mt-2">
                                    <p className="text-sm text-white">
                                        {props.comments.map((comment, index) => {
                                            if (comment.text !== undefined) {
                                                return (<div key={index} className="mt-2 opacity-70">
                                                    <p className="text-sm text-white opacity-40">{comment.by}</p>
                                                    {reactElementFromString(comment.text)}
                                                </div>)
                                            }
                                        })}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticleModal;