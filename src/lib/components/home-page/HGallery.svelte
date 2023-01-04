<script lang="ts">
	import HomeGalleryImages from '$lib/stores/HomeGalleryStore';
	import { createHGallery } from '$lib/utils/hGallery';
	import { onMount } from 'svelte';

  const imagesLength = $HomeGalleryImages[0].length;
  const imageDimen = 112;
  const gap = 32;
  const imageWidth = imageDimen + gap;

  onMount(()=>
  {
    createHGallery(imageWidth, imagesLength);
  })

</script>

<div class="gallery">
  {#each $HomeGalleryImages as rowImages,i}
  <div class="gallery_row" data-row={i} style:height={`${imageDimen}px`}>
    {#each rowImages as image}
    <img src={image} class="gallery_image" alt="" style:height={`${imageDimen}px`}> 
    {/each}
  </div>
  {/each}
</div>

<style lang="scss">
	.gallery {
		overflow: hidden;
		width: 100%;
		margin-top: 56px;
		display: flex;
		flex-direction: column;
		gap: 48px;

    &_row{
      position: relative;
      &:nth-of-type(2){
        margin-bottom: 20px;
      }
    }
    &_image{
      aspect-ratio: 1;
      position: absolute;
      object-fit: cover;
      border-radius: 16px;
      filter: drop-shadow(10px 8px 8px rgba(0,0,0,.3));
    }
	}
</style>