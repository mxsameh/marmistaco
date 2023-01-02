<svelte:head>
	<title>Products-Marmista</title>
</svelte:head>

<script lang="ts">
	import ProductsList from '$lib/components/products-page/ProductsList.svelte';
</script>

<div class="main">
	<h1 class="title">Our Finest <br /> Marble Production</h1>
	<ProductsList />
</div>

<style lang="scss">
  .main{
    padding: 24px 0;
  }
  .title{
    font-family: 'Playfair Display', serif;
    color: var(--gray-700);
    text-align: center;
    padding: 0 8px;
    white-space: nowrap;
    font-weight: 600;
    text-transform: capitalize;
    font-size: clamp(32px, 10vw, 64px);
    // line-height: clamp(48px, 10vw, 104px);
  }

  @media screen and (min-width: 1024px){
    .main {
      padding: 40px 0;
    }
    .title {
      font-size: clamp(32px, 7.5vw, 80px);
    }
  }
</style>