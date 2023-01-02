<script lang="ts">
	import ProductDetails from '$lib/components/product-page/ProductDetails.svelte';
	import ProductImage from '$lib/components/product-page/ProductImage.svelte';
	import ScreenSize from '$lib/stores/ScreenSizeStore';
	import { capitalizeProductName } from '$lib/utils/products';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let data: any;
	$: title = capitalizeProductName(data.product.name);
	$: links = data.productLinks;
	$: screenSize = $ScreenSize;
	let product: any;
	let newProduct: any;
	let firstLoad = false;
	let smallScreenTl = gsap.timeline({ paused: true });
	let largeScreenTl = gsap.timeline({ paused: true });


	onMount(() => {
		product = data.product;
		// firstLoad = false
	});

	const setTls = () => {
		// LARGE SCREEN TL
		largeScreenTl
			.to('.product_details', {
				x: '65%',
				duration: 1
			})
			.set('.product_body', {
				opacity: 0,
				onComplete: () => {
					product = newProduct;
					largeScreenTl.reverse();
				}
			});

		// SMALL SCREEN TL
		smallScreenTl
			.to('.product_details', {
				y: '38%',
				duration: 1
			})
			.set('.product_body', {
				opacity: 0,
				onComplete: () => {
					product = newProduct;
					smallScreenTl.reverse();
				}
			});
	};

	const runAnimation = () => {
		// if first load is true or product is not defined will return
		if (firstLoad || !product) return;

		setTls();

		if (screenSize != 's') {
			largeScreenTl.play();
		} else smallScreenTl.play(0);
	};

	$: {
		newProduct = data.product;
		runAnimation();
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if product}
	<div class="product">
		<ProductDetails name={product.name} productLinks={links} />
		<ProductImage image={product.image} />
	</div>
{/if}

<style>
	:root {
		--border-radius: 40px;
	}
	.product {
		width: 100%;
		height: calc(100vh - var(--header-height));
		position: relative;
    overflow: hidden;
	}

	@media screen and (min-width: 1034px) {
    .product{
      height: 100vh;
    }
	}
</style>
