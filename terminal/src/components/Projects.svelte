<script lang="ts">
    import ProjectIcon from "./ProjectIcon.svelte";
    import ProjectPreview from "./ProjectPreview.svelte";

    let showPreview: boolean = false;

    type Project = {
        name: string;
        imageSrc: string;
        left: number;
        top: number;
        tech: string[];
        onClick: () => void;
    };

    const Projects: Project[] = [
        {
            name: 'diarist.cloud',
            imageSrc: '../projects/diarist.png',
            left: 50,
            top: 50,
            tech: ['Firebase', 'JavaScript', 'HTML', 'Bootstrap', 'Dialogflow'],
            onClick: () => onProjectClick('https://diarist.cloud', 'diarist.cloud'),
        },
        {
            name: 'howdumb',
            imageSrc: '../projects/howdumb.png',
            left: 50,
            top: 50,
            tech: ['Three.js', 'Svelte', 'Bootstrap'],
            onClick: () => onProjectClick('https://howdumb-6969.web.app/', 'howdumb'),
        },
        {
            name: 'tetris',
            imageSrc: '../projects/tetris.png',
            left: 50,
            top: 50,
            tech: ['JavaScript', 'HTML', 'CSS'],
            onClick: () => onProjectClick('https://teodesk.com/tetris/', 'tetris'),
        },
    ];

    let projectToPreview: any;

    let doubleClickTimer: number; //its in use
    let doubleClicked: boolean = false;
    function onProjectClick(link: string, name?: string) {
        doubleClickTimer = window.setTimeout(() => doubleClicked = false, 500);
		if (doubleClicked) {
			window.clearTimeout(doubleClickTimer);
            doubleClicked = false;
            projectToPreview = Projects.find(project => project.name === name);
            window.open(link, '_blank');
        } else {
            doubleClicked = true;
        }
    }

    function onIconHover(name: string){
        projectToPreview = Projects.find(project => project.name === name);
        showPreview = true;
    }

function calculateGridRows() {
    let gridRows: number = Math.ceil(Projects.length / 3);
    return gridRows;
}
</script> <!-- add "grid-rows-number for each 3 projects" -->
<div class="projects-container p-4 grid grid-flow-row-dense grid-cols-3 grid-rows-{calculateGridRows()} gap-4 gap-y-10">
    {#each Projects as project}
        <span>
            <ProjectIcon name={project.name} 
                imageSrc={project.imageSrc} 
                onClick={project.onClick} 
                onMouseEnter={() => onIconHover(project.name)}
                onMouseLeave={() => showPreview = false}
                />
        </span>
    {/each}
</div>
{#if showPreview}
    <ProjectPreview
        title={projectToPreview.name}  
        tech={projectToPreview.tech}/>
{/if}
<style>
    .projects-container {
        width: 100%;
        max-width: 600px;
        height: 100%;
        min-height: 400px;
        max-height: 600px;
        overflow-y: scroll;
        background-color: silver;
    }
</style>