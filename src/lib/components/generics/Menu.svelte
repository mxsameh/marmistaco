<script lang="ts">
	import IsMenuOpened from '$lib/stores/IsMenuOpenedStore';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ActiveNavTab from '$lib/stores/ActiveNavTabStore';
  import SplitType from 'split-type'

	let menu: HTMLDivElement;
	let isOpened = $IsMenuOpened;

	let menuItems = [
		{ name: 'Home', link: '/' },
		{ name: 'Products', link: '/products' },
		{ name: 'Gallery', link: '/gallery' },
		{ name: 'Contact', link: '/contact' }
	];
	const tl = gsap.timeline({ paused: true });

	const closeMenu = () => {
		$IsMenuOpened = false;
	};


	onMount(() => {
		const links = document.querySelectorAll('.menu_item') as NodeListOf<HTMLElement>;
		links.forEach((link) => {
      SplitType.create(link, {types: 'chars'})
    });

		tl
    .fromTo(
			menu,
			{
				y: '100vh'
			},
			{
				y: '0vh',
				onStart: () => {
					isOpened = $IsMenuOpened;
				},
				onReverseComplete: () => {
					isOpened = $IsMenuOpened;
				}
			}
		)
    .fromTo(
      '.menu_item .char',
      {
        y : '100%',
      },
      {
        y: 0,
				ease: "power4.out",
        stagger:{amount: .5}
      }
    )
	});

	const handleClick = () => {};

	$: {
		if ($IsMenuOpened) tl.play();
		if (!$IsMenuOpened) tl.reverse();
	}
</script>

<div class="menu" class:isOpened bind:this={menu}>
	<ul class="menu_list">
		{#each menuItems as item}
			<a
				href={item.link}
				class="menu_item"
				class:menu_item-active={$ActiveNavTab == item.name.toLocaleLowerCase()}
				on:click={closeMenu}
			>
				{item.name}
			</a>
		{/each}
	</ul>
</div>

<style lang="scss">
	.menu {
		display: none;
		width: 100vw;
		height: calc(100vh - var(--header-height));
		position: fixed;
		top: var(--header-height);
    padding: 40px 0;
		left: 0;
		background-color: var(--gray-100);
		z-index: 99;
    overflow-y: scroll;

		&_list {
			display: flex;
			flex-direction: column;
			gap: clamp(40px, 10vh, 56px);
			align-items: center;
		}
		&_item {
			color: var(--gray-500);
			font-size: clamp(32px, 14vw, 80px);
			font-kerning: none;
			width: fit-content;
			overflow: hidden;
			display: inline-flex;
			font-family: 'Playfair Display', serif;
			font-weight: 500;
			text-transform: uppercase;
			&:hover {
				color: black;
			}
			&-active {
				color: black;
			}
		}
	}
	.isOpened.menu {
		display: block;
	}

	@media screen and (min-width: 1023px) {
		.menu {
			display: none !important;
		}
	}
</style>
