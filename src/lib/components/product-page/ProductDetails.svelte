<script lang="ts">
	import ProductBtns from './ProductBtns.svelte';

	export let name: string;
	export let productLinks: any;
</script>

<div class="product_details">
	<div class="product_body">
		<h1 class="product_title">{name} marble</h1>
		<div class="product_btns">
			<ProductBtns {productLinks} />
		</div>
	</div>
</div>

<style lang="scss">
	.product {
		&_details {
			height: 100%;
			background-color: var(--gray-100);
			border-radius: var(--border-radius) var(--border-radius) 0 0;
		}
		&_body {
			padding: 24px 0;
			height: 40%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		&_title {
			font-family: 'Playfair Display';
			text-transform: capitalize;
			font-weight: 500;
			font-size: 48px;
			text-align: center;
			padding: 0 8px;
		}
		&_btns {
			width: fit-content;
			margin: auto auto 0;
		}
	}

	@media screen and (min-width: 768px) {
		.product {
			&_details {
				border-radius: var(--border-radius) var(--border-radius) 0 var(--border-radius);
			}
			&_body {
				width: 50%;
				height: 100%;
				padding: 40px;
			}
			&_title {
				font-size: clamp(60px, 6vw, 120px);
			}
		}
	}
	@media screen and (min-width: 1024px) {
		.product {
			&_details {
        margin-left: 40px;
			}
		}
	}
</style>
