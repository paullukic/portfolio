<script lang="ts">
    import PdfViewer from 'svelte-pdf';
</script>
<div class="resume-container">
    <a href="../cv.pdf" download
        class="text-black text-center flex justify-center items-center download absolute px-2">
        Download
    </a>
    <PdfViewer showButtons={false} url='../cv.pdf' scale={1.25} />
</div>
<style>
    .download{
        right: 17px;
        top: 2px;
        background-color: silver;
		border-top: 1px solid #fff;
		border-left: 1px solid #fff;
		border-right: 1px solid gray;
		border-bottom: 1px solid gray;
		box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;

    }
    .resume-container {
        background-color: silver;
        height: 100%;
    }
    :global(.parent){
        max-width: 100%;
        max-height: 100%;
        margin:0 !important;
    }
    :global(.control){
        margin:0 !important;
    }

    :global(#topBtn){
        display: none;
    }
</style>