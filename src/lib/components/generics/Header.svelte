<script lang='ts'>
	import { browser } from "$app/environment";
	import ActiveNavTab from "$lib/stores/ActiveNavTabStore";
	import IsMenuOpened from "$lib/stores/IsMenuOpenedStore";
  import Menu from "./Menu.svelte";
	import MenuBtn from "./MenuBtn.svelte";

  const handleClick = () =>
  {
    $IsMenuOpened = !$IsMenuOpened
  }

  $:activeLink =  $ActiveNavTab

  $:{
    if($IsMenuOpened && browser) document.body.classList.add('body-menuOpened')
    if(!$IsMenuOpened && browser) document.body.classList.remove('body-menuOpened')
  }

</script>

<Menu/>

<div class="header_wraper" class:header-menuOpened={$IsMenuOpened}>
  <!-- LOGO -->
  <a  href="/" class="header_logo">
    <svg class="header_icon" viewBox="0 0 72 65" xmlns="http://www.w3.org/2000/svg">
      <path d="M72 0.599976V2.39773C69.9877 2.45765 68.4784 2.69735 67.4723 3.11683C66.4661 3.47638 65.7855 4.19548 65.4303 5.27413C65.1344 6.29286 64.9864 7.91083 64.9864 10.1281V54.7123C64.9864 56.8696 65.1344 58.4876 65.4303 59.5663C65.7855 60.6449 66.4661 61.364 67.4723 61.7236C68.4784 62.0831 69.9877 62.3228 72 62.4427V64.2404C70.5203 64.1206 68.6856 64.0607 66.4957 64.0607C64.3058 64.0007 62.0863 63.9708 59.8372 63.9708C57.3514 63.9708 55.0136 64.0007 52.8237 64.0607C50.6338 64.0607 48.8878 64.1206 47.5857 64.2404V62.4427C49.598 62.3228 51.1073 62.0831 52.1134 61.7236C53.1788 61.364 53.889 60.6449 54.2442 59.5663C54.5993 58.4876 54.7768 56.8696 54.7768 54.7123V5.54379L55.2207 5.72357L33.381 64.6H31.9605L9.05549 6.35278V52.3753C9.05549 54.8921 9.23305 56.8696 9.58816 58.3078C9.94328 59.6861 10.7127 60.6749 11.8964 61.2741C13.0801 61.8734 14.8853 62.2629 17.312 62.4427V64.2404C16.1874 64.1206 14.7374 64.0607 12.9618 64.0607C11.2454 64.0007 9.61776 63.9708 8.07892 63.9708C6.59926 63.9708 5.11961 64.0007 3.63995 64.0607C2.1603 64.0607 0.946979 64.1206 0 64.2404V62.4427C1.95314 62.2629 3.4328 61.9034 4.43896 61.364C5.44513 60.7648 6.12577 59.776 6.48089 58.3977C6.836 57.0195 7.01356 55.1318 7.01356 52.7348V10.1281C7.01356 7.91083 6.836 6.29286 6.48089 5.27413C6.12577 4.19548 5.44513 3.47638 4.43896 3.11683C3.4328 2.69735 1.95314 2.45765 0 2.39773V0.599976C0.946979 0.6599 2.1603 0.719826 3.63995 0.77975C5.11961 0.839674 6.59926 0.869636 8.07892 0.869636C9.79532 0.869636 11.5117 0.839674 13.2281 0.77975C15.0037 0.719826 16.5129 0.6599 17.7559 0.599976L37.3761 51.6562L35.6893 52.8247L54.9544 0.869636C55.7238 0.869636 56.5228 0.869636 57.3514 0.869636C58.18 0.869636 59.0086 0.869636 59.8372 0.869636C62.0863 0.869636 64.3058 0.839674 66.4957 0.77975C68.6856 0.719826 70.5203 0.6599 72 0.599976Z"/>
    </svg>
  </a>
  <!-- NAV -->
  <nav class="nav">
    <div class="nav_wraper">
      <a href="/" class="nav_link" class:nav_link-active={activeLink == 'home'}>home</a>
      <a href="/products" class="nav_link" class:nav_link-active={activeLink == 'products'}>products</a>
      <a href="/gallery" class="nav_link" class:nav_link-active={activeLink == 'gallery'}>gallery</a>
      <a href="/contact" class="nav_link" class:nav_link-active={activeLink == 'contact'}>contact</a>
    </div>
  </nav>
  <!-- MENU BUTTON -->
  <MenuBtn on:menuBtnClicked={handleClick}/>
</div>


<style lang='scss'>
  :root{
    --header-width : 153px;
    --header-height : 73px
  }
  .header{
    &_wraper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      width: 100%;
      height: var(--header-height);
    }
    &_logo{
      width: 40px; 
    }
    &_icon{
      fill: var(--text-1);
    }
    &-menuOpened{
    }
  }
  .nav{
    display: none;
  }

  @media screen and (min-width: 1024px){
    .header{
      &_wraper{
        width: var(--header-width);
        height: 100vh;
        padding: 24px;
        position: sticky;
        top: 0;
        left: 0;
        flex-direction: column;
        align-items: unset;
        justify-content: unset;
      }
      &_logo{
        width: 56px;
        flex: 0 0;
      }
    }
    .nav{
      display: flex;
      flex:1 1 100%;
      align-items: center;
      &_wraper{
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
      &_link{
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 500;
        width: fit-content;
        color: var(--text-2);
        &-active{
          color: var(--accent);
        }
        &:hover{
          cursor: pointer;
          color: var(--text-1);
          text-decoration: line-through;
        }

      }
    }
  }
  
</style>