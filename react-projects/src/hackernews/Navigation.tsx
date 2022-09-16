import * as React from 'react';

const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#top" >
                            HackerNews
                        </a>
                        <button className="text-white cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"  onClick={() => setNavbarOpen(!navbarOpen)} >
                            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className={"lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden") }
                        id="example-navbar-danger" >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {/* <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo">
                                    <i className="leading-lg text-white opacity-75"></i>
                                    <span className="ml-2 text-lg">Share</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo" >
                                    <i className=" leading-lg text-white opacity-75"></i>
                                    <span className="ml-2 text-lg">Tweet</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
