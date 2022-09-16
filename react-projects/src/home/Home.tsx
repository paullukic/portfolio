import * as React from 'react';
import { ProjectCard } from './component/ProjectCard';
import reactLogo from '../home/assets/react.svg'
import hackerNewsLogo  from '../hackernews/assets/img/hero.png'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
    public render() {
        return (
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap md-mx-1 lg:-mx-4 justify-center">
                    <ProjectCard title="HackerNews" imageUrl={hackerNewsLogo} linkTo={'hackernews'} />
                </div>
            </div>
        );
    }
}
