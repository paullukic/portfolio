<script lang="ts">
    import DraggableWindow from "./DraggableWindow.svelte";
    import { activeWindowZIndex } from "../store/stores";
    import { browser } from "$app/env";

    let activeWindowZ: number;
    activeWindowZIndex.subscribe(val => 
        activeWindowZ = val
    );

    export let title: string;
    export let onClose: () => void;
    export let zIndex: number;
    export let left: number;
    export let top: number;

    export function setToTopView() {
        if(zIndex <= activeWindowZ && browser) {
            zIndex = activeWindowZ + 1;
            activeWindowZIndex.set(zIndex);
        }
    }


</script>
<DraggableWindow zIndex={zIndex} title={title} left={left} top={top}>
        <div class={title+"element window-bar"} slot="window-bar" on:click={setToTopView}>
            <div class="window-bar-title">
                <div class="window-bar-title-text">
                    {title}
                </div>
                <div class="window-bar-title-buttons">
                    <div class="window-bar-title-button">
                        <div on:click={onClose} class="close"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class={title+"element window"} slot="window-content" on:click={setToTopView}>
            <slot></slot>
        </div>
</DraggableWindow>

<style>
    @media only screen and (max-width: 650px) {
		:global(.window) {
			max-width: 300px !important;
            max-height: 200px !important;
		}
        :global(.window-bar) {
            max-width: 300px !important;
            max-height: 50px !important;
        }
	}
    .window {
        position: absolute;
        top: 20px;
        width: 600px;
        height: 600px;
        max-width: 600px;
        max-height: 400px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border-left: 1px solid #fff;
		border-right: 1px solid gray;
		border-bottom: 1px solid gray;
		box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;

    }
    .window-bar {
        top: 0;
        left: 20px !important;
        margin-top: -4px;
        width: 600px !important;
        padding-left: 4px;
        width: 100%;
        height: 1.5em;
        background-color: navy;
        cursor: move;
        color: white;
        user-select: none;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
		box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #ffffff00
    }
    .close {
        position: absolute;
        right: 0.1em;
        top: -0.1em;
        width: 1.2em;
        height: 1.2em;
        opacity: 1;
        cursor: pointer;
    }
    .close:hover {
        opacity: 1;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
    }
    .close:active{
        background-color: silver;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
    }
    .close:before, .close:after {
        position: absolute;
        left: 7px;
        top: 2px;
        content: ' ';
        height: 1em;
        width: 2px;
        background-color: rgb(236, 9, 9);
        
    }
    .close:before {
        transform: rotate(45deg);
    }
    .close:after {
        transform: rotate(-45deg);
    }
</style>