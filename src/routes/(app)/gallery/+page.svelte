<script lang="ts">
	import Gallery from '$lib/components/gallery-page/Gallery.svelte';
	import GalleryImages from '$lib/stores/GalleryImagesStore';
</script>

<div class="gallery_container">
	<Gallery images={$GalleryImages.images} dimens={$GalleryImages.dimens} />
</div>

<style lang="scss">
	.gallery_container {
		padding: 24px 16px;
	}
	@media screen and (min-width: 1024px) {
		.gallery_container {
			padding-top: 40px;
		}
	}
</style>
