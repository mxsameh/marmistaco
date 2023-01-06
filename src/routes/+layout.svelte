<script lang="ts">
	import { page } from '$app/stores';
	import ActiveNavTab from '$lib/stores/ActiveNavTabStore';
	import ScreenSize from '$lib/stores/ScreenSizeStore';
	import { detectTheme } from '$lib/utils/theme';
	import '@fontsource/playfair-display/variable.css';
	import { onMount } from 'svelte';
	import '../styles/styles.css';
	onMount(() => {
		handleResize();
		detectTheme();
	});

	$: activeTab = $page.route.id?.replaceAll('/', ' ').trim().split(' ')[1] || 'home';
	$: {
		ActiveNavTab.set(activeTab);
	}

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

<slot />

<style lang="scss">
	:global(body) {
		font-family: 'Playfair DisplayVariable', serif;
		// font-weight: 400;
	}
</style>
