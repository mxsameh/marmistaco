<script lang="ts">
	import { goto } from '$app/navigation';
	export let productLinks: any;

	const nextProduct = () => {
		goto(productLinks.next);
	};
	const prevProduct = () => {
		goto(productLinks.prev);
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="btns">
	<svg on:click={prevProduct}
   class="leftBtn arrow" viewBox="0 0 100 54" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M100 27H1M23 53.5672C17.2916 34.2401 1.21496 27.2847 1.21496 27.2847C1.21496 27.2847 17.2916 20.3271 23 1"
			stroke-width="3"
			stroke-linejoin="bevel"
		/>
	</svg>

	<svg on:click={nextProduct} class="rightBtn arrow" viewBox="0 0 100 54" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M2.27299e-06 27.5672L99 27.5672M77 1.00002C82.7084 20.3271 98.785 27.2825 98.785 27.2825C98.785 27.2825 82.7084 34.2401 77 53.5672"
			stroke-width="3"
			stroke-linejoin="bevel"
		/>
	</svg>
</div>

<style lang="scss">
	.btns {
		display: flex;
		gap: 24px;
	}
	.arrow {
		width: 80px;
		height: auto;
		fill: none;
		stroke: var(--gray-700);
    path{
      stroke-width: 4;
    }
	}

	@media screen and (min-width: 1024px){
		.arrow{
			transition: all .5 linear;
      width: 60px;
    cursor: pointer;
			&:hover{
				stroke: black;
				scale: 1.1;
			}
		}
	}
</style>