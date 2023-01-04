<script lang="ts">
	import Footer from '$lib/components/generics/Footer.svelte';
	import Header from '$lib/components/generics/Header.svelte';
	import { onMount } from 'svelte';

	onMount(() => {});
</script>

<div class="page_wraper">
	<div class="page_content">
		<header class="header">
			<Header />
		</header>
		<main class="main">
			<slot />
		</main>
	</div>
	<footer class="footer">
		<Footer />
	</footer>
</div>

<style lang="scss">
	$border-radius: 40px;
	.page {
		&_wraper {
			width: 100vw;
			position: relative;
			margin-bottom: calc(var(--footer-height) + 40px);
		}
		&_content {
			width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
			z-index: 1;
			background-color: var(--background-2);
			border-radius: 0 0 $border-radius $border-radius;
			min-height: 100vh;
			overflow-x: clip;
		}
	}
	.main {
		width: 100%;
	}
	.footer {
		width: 100%;
		background-color: var(--background-3);
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 0;
		border-radius: $border-radius $border-radius 0 0;
	}

	@media screen and (min-width: 1024px) {
		.page {
			&_content {
				flex-direction: row;
			}
		}
		.header {
			flex-shrink: 0;
			flex-grow: 0;
		}
		.main {
			width: calc(100% - var(--header-width));
		}
	}
</style>
