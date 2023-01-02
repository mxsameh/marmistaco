<script lang="ts">
	import ScreenSize from '$lib/stores/ScreenSizeStore';
	import { onMount } from 'svelte';
	import '../styles/styles.css';
	onMount(() => {
		handleResize();
	});

	const handleResize = () => {
		if (window.innerWidth > 1024) {
			ScreenSize.set('l');
		} else if (window.innerWidth > 767) {
			ScreenSize.set('m');
		} else {
			ScreenSize.set('s');
		}
	};
</script>
<svelte:window on:resize={handleResize} />

<slot/>

<style lang="scss">
</style>
