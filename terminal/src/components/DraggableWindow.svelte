<script lang="ts">
	import { browser } from '$app/env';
	import { iconsPositionLocalStorage, windowPositionLocalStorage } from '../store/stores';

	export let left: number = 100;
	export let top: number = 100;
	export let zIndex: number;
	export let title: string;

	let windowsPos: string[];
	windowPositionLocalStorage.subscribe(val => {
		if(browser && val) return (localStorage.windowsPos = val);
	});	

	if (browser){
		windowsPos = localStorage.windowsPos
			? JSON.parse(localStorage.windowsPos)
			: [];
	}

	let moving: boolean = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e: { movementX: number; movementY: number }) {
		if (moving) {
			// get screen width and height
			const screenWidth = document.documentElement.clientWidth;
			const screenHeight = document.documentElement.clientHeight;
		
			let leftN: number = e.movementX + left;
			let topN: number = e.movementY + top;

			if (leftN < 0) leftN = 0;
			if (topN < 4) topN = 4;

			if(leftN > screenWidth - left + 600) leftN = screenWidth - left + 600;
			if(topN > screenHeight - top) topN = screenHeight - top;

			left = leftN;
			top = topN;
		}
	}

	function onMouseUp(title: string) {
		if(moving){
			// save window position to localStorage
			if(!windowsPos.find(window => window.split(',')[0] === title)){
				let newWindowPos = `${title},${left},${top}`;
				// add to local storage
				windowsPos = [...windowsPos, newWindowPos];
				windowPositionLocalStorage.set(JSON.stringify(windowsPos));
			}
			else{
				let windowPosIndex = windowsPos.findIndex(window => window.split(',')[0] === title);
				windowsPos[windowPosIndex] = `${title},${left},${top}`;
				windowPositionLocalStorage.set(JSON.stringify(windowsPos));
			}
		}
		moving = false;
	}
</script>

<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px; z-index:{zIndex};" class="absolute">
	<slot name="window-bar" />
</section>
<section  style="left: {left}px; top: {top}px; z-index:{zIndex};" class="absolute">
    <slot name="window-content" />
</section>

<svelte:window on:mouseup={() => onMouseUp(title)} on:mousemove={onMouseMove} />