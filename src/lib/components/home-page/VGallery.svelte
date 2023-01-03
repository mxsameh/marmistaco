<script lang="ts">
	import HomeGalleryImages from '$lib/stores/HomeGalleryStore';
	import { createVGallery } from '$lib/utils/vGallery';
	import { onMount } from 'svelte';

  const imagesLength = $HomeGalleryImages[0].length;
  const imageDimen = 120;
  const gap = 40;
  const imageHeight = imageDimen + gap;

  onMount(()=>
  {
    createVGallery(imageHeight, imagesLength)
  })

</script>

<div class="gallery">
  {#each $HomeGalleryImages as rowImages,i}
  <div class="gallery_col" data-col={i} style:width={`${imageDimen}px`}>
    {#each rowImages as image}
    <img src={image} class="gallery_image" alt="" style:width={`${imageDimen}px`}> 
    {/each}
  </div>
  {/each}
</div>

<style lang="scss">
	.gallery {
    flex-shrink: 0;
    flex-grow: 0;
		overflow: hidden;
    height: 100vh;
		display: flex;

    &_col{
      position: relative;
      margin: 24px;
    }
    &_image{
      aspect-ratio: 1;
      position: absolute;
      object-fit: cover;
      border-radius: 24px;
      filter: drop-shadow(-4px 8px 10px rgba(0,0,0,.3));
      background-color: var(--gray-200);
    }
	}
</style>