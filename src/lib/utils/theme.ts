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
  }
  console.log( theme );
}

export default detectTheme;