<script lang="ts">
    import { techIconsPath } from '../constants/constants'
    export let title: string;
    export let tech: string[];

    type Technology = {
        name: string;
        imageSrc: string;
    };

    let technologies: Technology[] = tech.map((tech: string) => {
        return {
            name: tech,
            imageSrc: techIconsPath[tech.toLowerCase()]
        }
    });

</script>
<div class="window p-4 mt-5 bg-silver text-center">
    <span class="text-blue-800">Technologies used to build {title}</span>
    <!-- add preview elements -->
    <div class="flex flex-row justify-center">
        {#each technologies as tech}
            <div class="text-center full-win-icon text-blue-800 m-3">
                <div style="background-image: url('{tech.imageSrc}');" class="win-icon text-center" />
                <div class="window-element-title">{tech.name}</div>
            </div>
        {/each}
    </div>
</div>


<style>
    .window {
        position: relative;
        top: 0;
        left: 0;
        width: auto;
        margin-top: -168px;
        height: auto;
        max-width: 600px;
        max-height: 400px;
        background-color: silver;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border-left: 1px solid #fff;
		border-right: 1px solid gray;
		border-bottom: 1px solid gray;
		box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
    }
    .win-icon {
		width: 64px;
		height: 64px;
		background-size: 64px 64px;
		background-repeat: no-repeat;
		background-position: center;
		margin: auto;
	}
</style>