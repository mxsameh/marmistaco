<script lang="ts">
	export let image: string;
</script>

<div class="product_image" style:background-image={`url(${image})`} />

<style>
	.product_image {
		width: 100%;
		height: 60%;
		position: absolute;
		left: 0;
		bottom: 0;
		border-radius: var(--border-radius) var(--border-radius) 0 0;
		box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.5);
		background-position: top left;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: var(--background-1);
	}
	@media screen and (min-width: 768px) {
		.product_image {
			width: 50%;
			height: 100%;
			left: unset;
			right: 0;
			top: 0;
			border-radius: var(--border-radius) var(--border-radius) 0 var(--border-radius);
			box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.5);
			max-width: 650px;
		}
	}
	@media screen and (min-width: 1024px) {
		.product_image {
			border-radius: var(--border-radius) 0 0 var(--border-radius);
		}
	}
</style>
