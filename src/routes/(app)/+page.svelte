<script lang="ts">
	import HGallery from '$lib/components/home-page/HGallery.svelte';
	import VGallery from '$lib/components/home-page/VGallery.svelte';
	import ScreenSize from '$lib/stores/ScreenSizeStore';
</script>
<svelte:head>
  <title>Home - Marmista</title>
</svelte:head>

<div class="container">
	<div class="body">
		<h1 class="body_title">add luxury to<br />your projects</h1>
		{#if $ScreenSize != 'l'}
			<HGallery />
		{/if}
    <div class="body_content">
      <h3 class="body_text">High quality Turkish, Italian and Spanish marble.</h3>
      <a class="cta" href="/products">
        <p class="cta_text">view all products</p> 
        <svg class="cta_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.076 74.199">
          <g transform="translate(0 73.777) rotate(-90)">
            <line y2="93.477" transform="translate(36.677 0)" stroke-miterlimit="10" stroke-width="3"/>
            <path d="M73.355,0C46.385,7.916,36.679,30.21,36.679,30.21S26.97,7.916,0,0" transform="translate(0 63.267)" stroke-linejoin="bevel" stroke-width="3"/>
          </g>
        </svg>
      </a>
    </div>
	</div>

	{#if $ScreenSize == 'l'}
		<VGallery />
	{/if}
</div>

<style lang="scss">
	.body {
    padding: 40px 0;
		&_title {
			font-size: clamp(44px, 10vw, 100px);
			text-align: center;
			text-transform: capitalize;
      color: var(--text-1);
		}

    &_content{
      padding: 0 8px;
    }
		&_text {
			margin-top: 48px;
			font-size: 24px;
			text-align: center;
      color: var(--text-2);
      font-family: Arial, Helvetica, sans-serif;
		}
	}

	.cta {
		margin: 0 auto;
		margin-top: 24px;
    display: flex;
    gap: 8px;
		width: fit-content;

		&_text {
			font-size: 24px;
			text-transform: uppercase;
      color: var(--accent);
		}
    &_icon{
      fill : none;
      -webkit-text-stroke-color: var(--accent);
      stroke: var(--accent);
      width: 32px;
      rotate: -40deg;
    }
	}

  @media screen and (min-width: 1024px){
    .container{
      display: flex;
      padding: 0 24px;
    }
    .body{
      padding: 56px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &_title{
        font-size: clamp(48px, 6vw, 120px)
      }
    }

  }
</style>
