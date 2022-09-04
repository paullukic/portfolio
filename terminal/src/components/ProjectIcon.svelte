<script lang="ts">
    export let imageSrc: string = '';
    export let name: string = '';
    export let onClick: () => void = () => {};
    export let onMouseEnter: () => void = () => {};
    export let onMouseLeave: () => void;
</script>
<div on:click={onClick}>
    <div class="projectIcon" style="background-image: url({imageSrc});"></div>
    <div on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}
        class="projectIconText truncate text-center mt-1 text-black">{name}</div>
</div>
<style>
    .projectIcon{
        width: 100%;
        height: 180px;
        background-size: contain;
        background-repeat: repeat;
        background-position: top center;
        margin: auto;
        cursor: pointer;
        border-top: 1px solid #fff;
		border-left: 1px solid #fff;
		border-right: 1px solid gray;
		border-bottom: 1px solid gray;
		box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
    }
    .projectIconText{
        user-select: none;;
    }
</style>