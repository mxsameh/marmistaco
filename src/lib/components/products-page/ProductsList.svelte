<script lang='ts'>
	import Products from "$lib/stores/ProductsStore";
</script>

<ul class="products_list">
  {#each $Products as product }
  <a class="product" href={product.link}>
    <img class="product_image" src={product.image} alt="">
    <h3 class="product_name">{product.name}</h3> 
  </a>
  {/each}

</ul>



<style lang='scss'>
  .products_list{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
    padding: 0 24px;
    gap: 40px;
    margin: 56px auto 0;
    width: 100%;
  }
  .product{
    display: flex;
    flex-direction: column;
    align-items: center;
    &_image{
      max-width: 160px;
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 20px;
      background-color: var(--gray-200);
      filter: drop-shadow(10px 8px 8px rgba(0,0,0,.3)) brightness(1);
    }
    &_name{
      color: var(--gray-500);
      margin-top: 16px;
      text-transform: capitalize;
      font-family: 'Playfair Display';
      font-size: 24px;
      font-weight: normal;
      text-align: center;
      white-space: nowrap;
    }
  }

  @media screen and (min-width: 1024px){
    .products_list{
      gap: 48px;
      margin-top: 80px;
      max-width: calc( 6 * 200px + 5 * 40px); // 200-> maxImage , 40 -> gap
    }
    .product{
      &_image{
        filter: brightness(.8);
        transition: scale 150ms ease-in;
      }
      &_name{
        margin-top: 20px;
      }
      &:hover &_name{
        color: black;
      }
      &:hover &_image{
        filter: drop-shadow(10px 8px 8px rgba(0,0,0,.3)) brightness(1);
        // filter: brightness(1);
        scale: 1.1;
      }
    }
  
  }
  
</style>