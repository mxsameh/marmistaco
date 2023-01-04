import Theme from "$lib/stores/ThemeStore";

const detectTheme = () =>{
  let theme = "light";
  if(localStorage.getItem("theme"))
  {
    theme = localStorage.getItem("theme") == "dark" ? "dark" : "light"
  }
  else if(!window.matchMedia) return
  else if(window.matchMedia("(prefers-color-scheme:dark)").matches)
  {
    theme = "dark"
  } 

  if(theme == "dark")
  {
    document.documentElement.setAttribute("data-theme","dark") 
    Theme.set('dark')
  }
}

const updateTheme = () =>
{
  const theme = document.documentElement.getAttribute("data-theme") || 'light'
  if(theme == "dark")
  {
    document.documentElement.removeAttribute("data-theme")
  }
  else{
    document.documentElement.setAttribute("data-theme","dark") 
  }
}

export {detectTheme, updateTheme}