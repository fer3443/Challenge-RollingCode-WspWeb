(() => {
    const btnMenu =  document.querySelector("#buton-menu");
    const menuOptions = document.querySelector("#menu-options");

    //manejo del boton menu
    const handleButtonMenu = () => {
      menuOptions.classList.toggle("menu-show");
      btnMenu.classList.toggle("btn-clicked");
    };
    btnMenu.addEventListener("click",() => handleButtonMenu());

    //manejo del boton opciones chat
    const btnChevron = document.querySelectorAll(".chevron");
    const chatCard = document.querySelectorAll(".chat-card");

    const createMenu = () => {
        const menuOptions2 = document.createElement("div");
        menuOptions2.className = "menu-options2";
        menuOptions2.innerHTML=`
        <ul>
        <li>Archivar chat</li>
        <li>Silenciar notificaciones</li>
        <li>Eliminar chat</li>
        <li>Fijar chat</li>
        <li>Marcar como leído</li>
        <li>Bloquear</li>
      </ul>
        `
        chatCard.map(card => {//corregir esta parte
           card.appendChild(menuOptions2)
           return card
        })
    }
    const handleButtonChevron = () => {
      createMenu()
    }
    btnChevron.forEach(b => b.addEventListener("click", () => handleButtonChevron()))
})()