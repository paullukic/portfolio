import * as React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import diarist from './assets/projects/diarist.png'
import howdumb from './assets/projects/howdumb.png'
import tetris from './assets/projects/tetris.png'
import win98 from './assets/projects/win98.png'
import hackernews from './assets/projects/hackernews.png'

import design from './assets/design.png'
import code from './assets/code.png'
import hack from './assets/hack.png'

import avatar from './assets/3dme.png'

import './styles/home.css';

export interface IAppProps {
}

export default function Home(props: IAppProps) {

    const [darkMode, setDarkMode] = React.useState(false);

    // get mode from local storage
    React.useEffect(() => {
        const mode = localStorage.getItem('mode');
        if (mode === 'dark') {
            setDarkMode(true);
        }
    }, []);

    // set mode to local storage
    React.useEffect(() => {
        if (darkMode) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', '');
        }
    }, [darkMode]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className='bg-white dark:bg-neutral-800 px-10 md:px-20 lg:px-40'>
                <section className='min-h-screen'>
                    <nav className='py-10 mb-12 flex justify-between'>
                        <h1 className='text-xl dark:text-gray-400'>paullukic</h1>
                        <ul className='flex items-center'>
                            <li onClick={() => setDarkMode(!darkMode)} >
                                <BsFillMoonStarsFill className='cursor-pointer text-xl text-neutral-700 dark:text-gray-400' />
                            </li>
                            <li>
                                <a href="./assets/cv.pdf" download
                                    className='bg-gradient-to-r from-stone-400 to-stone-500
                                    text-white dark:text-neutral-800 px-4 py-2 ml-10 cursor-pointer text-xl 
                                    rounded'>Resume</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='text-center p-10'>
                        <h2 className='text-5xl py-2 text-stone-400 md:text-6xl'>Paul Lukic</h2>
                        <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-400'>Developer, designer and hacker.</h3>
                        <p className='text-md py-5 text-gray-500 md:text-xl max-w-xl mx-auto'>I'm a software developer with a passion for design, hacking and a love for learning. I'm currently working at <a className='text-green-600' href='teodesk.com'>Teodesk</a> as a full stack developer.</p>
                    </div>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                        <a href='https://github.com/paullukic/' target='_blank'><AiFillGithub className='text-4xl dark:text-gray-400' /></a>
                        <a href='https://www.linkedin.com/in/paul-lukic/' target='_blank'><AiFillLinkedin className='text-4xl dark:text-gray-400' /></a>
                    </div>
                    <div className='relative py-10'>
                        <img className='rounded-full mx-auto w-80 h-80 md:h-96 md:w-96' src={avatar} alt='avatar' />
                    </div>
                </section>
                <section>
                    <div className='text-center'>
                        <h3 className='text-3xl py-1 dark:text-gray-400'>Services I offer</h3>
                        <p className='text-md py-5 text-gray-500'>Since I'm a full stack developer
                            I can offer a wide range of services. I can help you with your next project,
                            whether it's a
                            <span className='text-green-600'> web app</span>,
                            <span className='text-blue-400'> desktop app</span>,
                            <span className='text-purple-400'> API</span>,
                            <span className='text-orange-600'> design</span>, or even
                            <span className='text-red-600'> ethical hacking</span>.
                        </p>
                    </div>
                    <div className='lg:flex gap-10 dark:text-gray-400'>
                        <div className='text-center dark:bg-neutral-900 basis-0 grow shadow-lg p-10 rounded-xl my-10'>
                            <img className='mx-auto' src={design} alt='design' style={{ width: '100px', height: '100px' }} />
                            <h3 className='text-lg pt-8 pb-2'>Application Designs</h3>
                            <p className='py-2'>
                                Creating a beautiful design for your app is a must. I can help you with that.
                            </p>
                            <h4 className='py-4 text-orange-600'>Design tools I use</h4>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>XD</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
                        </div>
                        <div className='text-center dark:bg-neutral-900 basis-0 grow shadow-lg p-10 rounded-xl my-10'>
                            <img className='mx-auto' src={code} alt='code' style={{ width: '120px', height: '120px' }} />
                            <h3 className='text-lg pt-8 pb-2'>Code</h3>
                            <p className='py-2'>
                                I can help you with your next project, whether it's a web app, desktop app, or API.
                            </p>
                            <h4 className='py-4 text-green-600'>Technologies I use</h4>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>HTML & CSS</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Bootstrap, Tailwind</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Javascript</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Typescript</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>React</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Svelte</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Java</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Python</p>

                        </div>
                        <div className='text-center dark:bg-neutral-900 basis-0 grow shadow-lg p-10 rounded-xl my-10'>
                            <img className='mx-auto' src={hack} alt='hack' style={{ width: '100px', height: '100px' }} />
                            <h3 className='text-lg pt-8 pb-2'>Hack</h3>
                            <p className='py-2'>
                                I can perform an authorized simulated attack performed on a computer system or web application to evaluate its security.
                            </p>
                            <h4 className='py-4 text-red-600'>Tools I use</h4>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Burp Suite</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Nmap</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Metasploit</p>
                            <p className='text-gray-800 py-1 dark:text-gray-400'>Wide range of Kali Linux toolset</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-gray-400'>My work</h3>
                        <p className='text-md pt-5 text-gray-500'>Here are some of my projects.</p>
                        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                            <a href='https://diarist.cloud' target="_blank" className='basis-1/3 flex-1'>
                                <img className='mx-auto rounded-lg object-cover w-full' src={diarist} alt='diarist' />
                            </a>
                            <a href='https://paullukic.com/gui/win98.html' target="_blank" className='basis-1/3 flex-1'>
                                <img className='mx-auto rounded-lg object-cover w-full h-full' src={win98} alt='win98' />
                            </a>
                            <a href='https://teodesk.com/tetris/' target="_blank" className='basis-1/3 flex-1'>
                                <img className='mx-auto rounded-lg object-cover w-full h-full' src={tetris} alt='tetris' />
                            </a>
                            <a href='https://howdumb-6969.web.app/' target="_blank" className='basis-1/3 flex-1'>
                                <img className='mx-auto rounded-lg object-cover w-full h-full' src={howdumb} alt='howdumb' />
                            </a>
                            <a href='hackernews' target="_blank" className='basis-1/3 flex-1'>
                                <img className='mx-auto rounded-lg object-cover w-full' src={hackernews} alt='hackernews' />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
