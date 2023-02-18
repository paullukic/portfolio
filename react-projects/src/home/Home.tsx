import * as React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai';

import design from './assets/design.png'
import code from './assets/code.png'
import hack from './assets/hack.png'

import avatar from './assets/3dme.png'

import './styles/home.css';
import { PROJECTS } from './consts';
import { ProjectCard } from './component/ProjectCard';

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

    let containerRef = React.useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft += e.deltaY;
        }
    };

    React.useEffect(() => {
        const container = document.getElementById('scroll-container') as HTMLDivElement;
        if (container) {
            container.addEventListener('wheel', function () { handleWheel });
        }
        return () => {
            if (container) {
                container.removeEventListener('wheel', function () { handleWheel });
            }
        };
    }, [handleWheel]);

    const scrollRight = () => {
        const container = document.getElementById('scroll-container') as HTMLDivElement;
        if (container) {
            // slowly scroll to the right
            let i = 0;
            const interval = setInterval(() => {
                if (i < 100) {
                    container.scrollLeft += 5;
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 5);
        }
    };

    const scrollLeft = () => {
        const container = document.getElementById('scroll-container') as HTMLDivElement;
        if (container) {
            // slowly scroll to the left
            let i = 0;
            const interval = setInterval(() => {
                if (i < 100) {
                    container.scrollLeft -= 5;
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 2);
        }
    };

    const randomizeLetters = (e: React.MouseEvent<HTMLHeadingElement>) => {
        const nameElement = document.getElementById('name');
        const name = "PAUL LUKIC"
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (nameElement) {
            // randomize letters in words but keep the same word and space
            const randomName = name.split('').map((letter) => {
                if (letter === " ") {
                    return " ";
                } else {
                    return letters[Math.floor(Math.random() * letters.length)];
                }
            }).join('');
            nameElement.innerHTML = randomName;

            // set timeout to change back to original name
            // letter by letter to make it look more natural

            setTimeout(() => {
                const nameLetters = name.split('');
                const randomNameLetters = randomName.split('');
                let i = 0;
                const interval = setInterval(() => {
                    if (i < nameLetters.length) {
                        if (nameLetters[i] === " ") {
                            randomNameLetters[i] = " ";
                        } else {
                            randomNameLetters[i] = nameLetters[i];
                        }
                        nameElement.innerHTML = randomNameLetters.join('');
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 50);
            }, 20);

        }
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className='bg-white dark:bg-neutral-800 px-10 md:px-20 lg:px-40 pb-10'>
                <section className='min-h-screen z-20 relative'>
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
                        <h2 id='name'
                            className='text-5xl py-2 text-stone-400 md:text-6xl'
                            onMouseOver={randomizeLetters}
                        >PAUL LUKIC</h2>
                        <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-400'>Developer, designer and hacker.</h3>
                        <p className='text-md py-5 text-gray-500 md:text-xl max-w-xl mx-auto'>I'm a software developer with a passion for design, hacking and a love for learning. I'm currently working at <a className='text-green-600' href='https://www.teodesk.com/'>Teodesk</a> as a full stack developer.</p>
                    </div>
                    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                        <a href='https://github.com/paullukic/' target='_blank'><AiFillGithub className='text-4xl dark:text-gray-400' /></a>
                        <a href='https://www.linkedin.com/in/paul-lukic/' target='_blank'><AiFillLinkedin className='text-4xl dark:text-gray-400' /></a>
                    </div>
                    <div className='relative py-10'>
                        <img className='rounded-full mx-auto w-80 h-80 md:h-96 md:w-96' src={avatar} alt='avatar' />
                    </div>
                </section>
                <section className='mb-[440px]'>
                    <h3 className='text-3xl py-1 dark:text-gray-400 z-20 relative'>My work</h3>
                    <p className='text-md pt-5 text-gray-500'>
                        As a web application developer, 
                        I've had the opportunity to work on a variety of exciting projects that have challenged my skills and allowed me to grow as a developer. 
                        Although I can't share everything from my work so far, here's a brief overview of some of the projects I've worked on:
                    </p>
                    <div id='scroll-container' onWheel={handleWheel}
                        className='h-auto py-2 pt-20 absolute left-[-17px] w-screen max-w-screen overflow-x-scroll hide-scrollbar rotate-0 lg:rotate-[5deg] z-30'
                        ref={containerRef}>
                        <div className='flex w-max gap-x-4 px-20 pb-10'>
                            {
                                PROJECTS.map((project, index) => (
                                    <ProjectCard key={index} title={project.title} imageUrl={project.imageUrl} linkTo={project.linkTo} />
                                ))
                            }
                        </div>
                    </div>
                    {/* button scroll indicator */}
                    <div className='absolute right-0 h-[300px] w-full flex justify-start pt-48'>
                        <button onClick={scrollLeft}
                            className='border-2 border-slate-500 dark:border-slate-400 z-50 rotate-[90deg] backdrop-blur-sm h-16 rounded-full
                            text-slate-500 dark:text-slate-400 px-4 py-2 cursor-pointer text-2xl'>
                            <AiOutlineArrowDown className='text-3xl' />
                        </button>
                    </div>
                    <div className='absolute right-1 h-[300px] w-full flex justify-end pt-48'>
                        <button onClick={scrollRight}
                            className='border-2 border-slate-500 dark:border-slate-400 z-50 rotate-[270deg] backdrop-blur-sm  h-16 rounded-full
                            text-slate-500 dark:text-slate-400 px-4 py-2 cursor-pointer text-2xl'>
                            <AiOutlineArrowDown className='text-3xl' />
                        </button>
                    </div>
                </section>
                <section>
                    <div className='text-center'>
                        <h3 className='text-3xl py-1 dark:text-gray-400'>Services I offer</h3>
                        <p className='text-md pt-5 text-gray-500'>Are you in need of high-quality code services? Look no further! As a skilled and experienced coder, I offer a wide range of code services including
                            <span className='text-green-600'> web app</span>,
                            <span className='text-blue-400'> desktop app</span>,
                            <span className='text-purple-400'> API</span>,
                            <span className='text-orange-600'> design</span>, or even
                            <span className='text-red-600'> ethical hacking</span>.
                        </p>
                        <p className='text-md pt-5 text-gray-500'>My expertise lies in a variety of programming languages, frameworks, and tools, listed below. With my
                            <span className='text-orange-600'> technical skills and problem-solving abilities</span>, I can help take your project to the
                            <span className='text-green-600'> next level</span>.
                            I follow a structured development process, maintaining high coding standards and ensuring regular communication and feedback throughout the project. I'm available to work on your project as soon as possible, and I guarantee timely completion and delivery.
                            Don't hesitate to contact me for more information on pricing and availability. I'm excited to hear about your project and how I can help
                            <span className='text-red-600'> bring your vision to life through code</span>!
                        </p>
                    </div>
                    <div className=' dark:text-gray-400 leading-none text-center flex-1 dark:bg-neutral-900 basis-0 grow shadow-lg p-10 rounded-xl mt-10'>
                        <img className='mx-auto' src={code} alt='code' style={{ width: '120px', height: '120px' }} />
                        <h3 className='text-lg pt-8 pb-2'>Coding</h3>
                        <div className='flex gap-10'>
                            <div className='basis-0 grow'>
                                <h4 className='py-4 text-green-600 basis-0'>Technologies I use</h4>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>HTML & CSS</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Bootstrap, Tailwind</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Javascript</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Typescript</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>React</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Svelte</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Java</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Python</p>
                            </div>
                            <div className='basis-0 grow'>
                                <h4 className='py-4 text-green-600'>Tools I use</h4>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>VS Code</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Intelij</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Github</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Gitlab</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Github Copilot</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Postman</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Docker</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>Node Package Manager</p>
                                <p className='text-gray-800 py-1 dark:text-gray-400'>And many more...</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex gap-10 dark:text-gray-400 leading-none'>
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
                <section className='dark:text-gray-400'>
                    <div className='rounded-xl dark:bg-neutral-900 basis-0 grow shadow-lg p-10 text-center'>
                        <div className='text-center'>
                            <h3 className='text-3xl py-1 dark:text-gray-400'>Contact me</h3>
                        </div>
                        <p className='text-md pt-5 text-gray-500'>If you have any questions or want to work with me, feel free to contact me.</p>
                        <div className='text-5xl flex justify-center gap-16 pt-10 text-gray-600'>
                            <a href='https://github.com/paullukic/' target='_blank'><AiFillGithub className='text-4xl dark:text-gray-400' /></a>
                            <a href='https://www.linkedin.com/in/paul-lukic/' target='_blank'><AiFillLinkedin className='text-4xl dark:text-gray-400' /></a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
