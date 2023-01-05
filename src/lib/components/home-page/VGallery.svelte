<script lang="ts">
	import HomeGalleryImages from '$lib/stores/HomeGalleryStore';
	import { createVGallery } from '$lib/utils/vGallery';
	import { onMount } from 'svelte';

  const imagesLength = $HomeGalleryImages[0].length;
  const gap = 40;
  let colWidth : number;

  onMount(()=>
  {
    let imageSize = colWidth;
    createVGallery(imageSize, gap, imagesLength)
  })

  const handleResize = () =>
  {
    let imageSize = colWidth;
    createVGallery(imageSize, gap, imagesLength)

  }

</script>

<svelte:window on:resize={handleResize}/>

<div class="gallery">
  {#each $HomeGalleryImages as rowImages,i}
  <div class="gallery_col" data-col={i} bind:clientWidth={colWidth} >
    {#each rowImages as image}
    <img src={image} class="gallery_image" alt="" > 
    {/each}
  </div>
  {/each}
</div>

<style lang="scss">
	.gallery {
    width: clamp(324px, 35%, 440px);
    flex-shrink: 0;
    flex-grow: 0;
		overflow: hidden;
    height: 100vh;
		display: flex;

    &_col{
      position: relative;
      margin: 0 24px;
      width: 100%;
    }
    &_image{
      aspect-ratio: 1;
      position: absolute;
      object-fit: cover;
      border-radius: 24px;
      filter: drop-shadow(-4px 8px 10px rgba(0, 0, 0, 0.3));
      background-color: var(--background-1);
    }
	}
</style>