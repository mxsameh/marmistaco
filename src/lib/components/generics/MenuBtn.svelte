<script lang='ts'>
	import IsMenuOpened from '$lib/stores/IsMenuOpenedStore';
  import {gsap} from 'gsap'
	import { createEventDispatcher, onMount } from "svelte";

  let menuLine1 : HTMLSpanElement;
  let menuLine2 : HTMLSpanElement;

  const dispatch = createEventDispatcher();

  const tl = gsap.timeline({paused:true});
  

  $:{
    if($IsMenuOpened) tl.play()
    if(!$IsMenuOpened) tl.reverse()
  }

  const handleMenuBtn = () =>
  {
    dispatch('menuBtnClicked')
  }

  onMount(()=>
  {
    tl
    .to(menuLine1,{
      y : 7
    })
    .to(menuLine2,{
      y: -6
    },'<')
    .to([menuLine1,menuLine2],{
      rotate: 360,
      duration: .2
    })
    .to(menuLine1,{
      rotate: 45
    })
    .to(menuLine2,{
      rotate: -45
    },'<')
    .set([menuLine1,menuLine2],{
      background: "#580000"
    })

  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu_btn" on:click={handleMenuBtn}>
  <div class="menu_icon">
    <span class="menu_line" bind:this={menuLine1}></span>
    <span class="menu_line" bind:this={menuLine2}></span>
  </div>
</div>


<style lang="scss">
  .menu_icon{
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .menu_line{
    display: inline-block;
    width: 48px;
    height:5px;
    background-color: black;
  }

  @media screen and (min-width: 1024px){
    .menu_btn{
      display: none;
    }
  }
  
</style>