import diarist from './assets/projects/diarist.png'
import howdumb from './assets/projects/howdumb.png'
import tetris from './assets/projects/tetris.png'
import win98 from './assets/projects/win98.png'
import hackernews from './assets/projects/hackernews.png'

import { ProjectCardProps } from './component/ProjectCard';

export const PROJECTS: ProjectCardProps[] = [
    {
        title: 'Diarist Cloud',
        imageUrl: diarist,
        linkTo: 'https://diarist.cloud'
    },
    {
        title: 'Win98 GUI Replica',
        imageUrl: win98,
        linkTo: 'https://paullukic.com/gui/win98.html'
    },

    {
        title: 'Teodesk Tetris',
        imageUrl: tetris,
        linkTo: 'https://teodesk.com/tetris/'
    },
    {
        title: 'Howdumb Meme Quiz',
        imageUrl: howdumb,
        linkTo: 'https://howdumb-6969.web.app/'
    },
    {
        title: 'Hackernews Clone',
        imageUrl: hackernews,
        linkTo: 'https://hackernews-6969.web.app/'
    }
];