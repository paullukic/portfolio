<script lang="ts">
	export let left: string = '100';
	export let top: string = '100';

	let moving: boolean = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e: { movementX: number; movementY: number }) {
		if (moving) {
			left = (parseInt(left) + e.movementX) + 'px';
			top = (parseInt(top) + e.movementY) + 'px';
		}
	}

	function onMouseUp() {
		moving = false;
	}
</script>

<section on:mousedown={onMouseDown} style="left: {left}; top: {top};" class="draggable">
	<slot />
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.draggable {
		user-select: none;
		cursor: pointer;
		position: absolute;
	}
</style>
