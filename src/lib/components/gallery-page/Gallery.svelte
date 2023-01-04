<script lang="ts">
	import positionImages, { scrollImages } from '$lib/utils/gallery';
	import { onMount } from 'svelte';

	export let images: any;
	export let dimens: any = [];

	let gallery: HTMLDivElement;
	let galleryImages: NodeListOf<HTMLImageElement>;

	onMount(() => {
		galleryImages = document.querySelectorAll('.gallery_img') as NodeListOf<HTMLImageElement>;
		positionImages(galleryImages, gallery);
		gallery.style.opacity="1";
	});


	const handleResize = () => {
		positionImages(galleryImages, gallery);
	};
	const handleScroll = () =>{
			scrollImages(galleryImages);
	}

</script>

<svelte:window on:resize={handleResize} on:scroll={handleScroll}/>

<div class="gallery" bind:this={gallery} style:opacity="0">
	<div class="gallery_wraper">
		{#each images as img, i}
			<img data-key={i} data-dimen={dimens[i]} class="gallery_img" src={img} alt={`${i}.jpg`} />
		{/each}
	</div>
</div>

<style lang="scss">
	.gallery {
		width: 100%;
		position: relative;
	}
	.gallery_wraper {
		width: 100%;
		position: fixed;
	}
	.gallery_img {
		position: absolute;
	}
</style>