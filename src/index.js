(() => {
    const btnMenu =  document.querySelector("#buton-menu");
    const menuOptions = document.querySelector("#menu-options");

    //manejo del boton menu
    const handleButtonMenu = () => {
      menuOptions.classList.toggle("menu-show");
      btnMenu.classList.toggle("btn-clicked");
    };
    btnMenu.addEventListener("click",() => handleButtonMenu());
    
    //manejo de evento clic para ocultar el menu de opciones de la card
    document.addEventListener("click", (event) => {
      if(!menuOptions2.contains(event.target) && !btnChevron.contains(event.target)){
        if(menuOptions2.classList.contains("show-menu2")){
          menuOptions2.classList.remove("show-menu2")
        }else{
          return true
        }
      }
    })
    const btnChevron = document.querySelector(".chevron");
    const menuOptions2 =  document.querySelector(".menu-options2");
    //manejo del boton menu de opciones de la card
    const handleButtonChevron = () => {
      menuOptions2.classList.toggle("show-menu2")
    }

    btnChevron.addEventListener("click", () => handleButtonChevron())
})()