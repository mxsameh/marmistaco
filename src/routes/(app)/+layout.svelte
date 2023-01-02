<script lang='ts'>
	import Header from "$lib/components/generics/Header.svelte";
  import { onMount } from "svelte";


  let footerHeight : number;
  let contentHeight : number;
  let wraperHeight : number;
  const gap = 40;

  onMount(()=>
  {
    wraperHeight = contentHeight + footerHeight + gap
    console.log( wraperHeight );
  })

 
</script>


<div class="page_wraper" style:height={wraperHeight+'px'}>
  <div class="page_content" bind:clientHeight={contentHeight}>
    <header class="header">
      <Header/>
    </header>
    <main class="main">
      <slot/>
    </main>
  </div>
<footer class="footer" bind:clientHeight={footerHeight}>

</footer>
</div>

<style lang='scss'>
  $border-radius: 40px;
  .page{
    &_wraper{
      width: 100vw;
      position: relative;
    }
    &_content{
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
      background-color: white;
      border-radius: 0 0 $border-radius $border-radius;
      min-height: 150vh;
    }
  }
  .main{
    width: 100%;
    background-color: var(--main-gray);
  }
  .footer{
    width: 100%;
    height: 300px;
    background-color: var(--footer-gray);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 0;
    border-radius: $border-radius $border-radius 0 0;
  }

  @media screen and (min-width: 1024px){
    .page{
      &_content{
        flex-direction: row;
      }
    } 
    .header{
      flex: 0 0;
    }
    .main{
      flex: 1 1 100%
    }
  }
  
</style>