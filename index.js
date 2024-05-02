import users from "./user.js";
import { renderChat, handleButtonMenu2 } from "./funciones.js";
(() => {
  const cardContainer = document.querySelector("#content-chat-card");
  const btnMenu = document.querySelector("#buton-menu");
  const menuOptions = document.querySelector("#menu-options");
  renderChat(users, cardContainer);

  //manejo del boton menu
  const handleButtonMenu = () => {
    menuOptions.classList.toggle("menu-show");
    btnMenu.classList.toggle("btn-clicked");
  };
  btnMenu.addEventListener("click", () => handleButtonMenu());

  //manejo de menus-options2
  const allBtnChev = document.querySelectorAll(".chevron");
  handleButtonMenu2(allBtnChev);

  //manejo de menus-options para cerrado automatico
  const menuOptions2 = document.querySelectorAll(".menu-options2");
  document.addEventListener("click", (event) => {
    let clicFueraMenu = true;
    menuOptions2.forEach((menu) => {
      if (menu.contains(event.target)) {
        clicFueraMenu = false;
      }
    });
    allBtnChev.forEach((btn) => {
      if (btn.contains(event.target)) {
        clicFueraMenu = false;
      }
    });
    if (clicFueraMenu) {
      menuOptions2.forEach((menu) => {
        if (menu.classList.contains("show-menu2")) {
          menu.classList.remove("show-menu2");
        }
      });
    }
  });
  const btnChats = document.querySelector("#btn-chats");
  const btnConfig = document.querySelector("#btn-config");
  const menuConfig = document.querySelector("#config-container");

  const handleButtonConfig = () => {
    menuConfig.classList.toggle("show-config");
  };
  btnConfig.addEventListener("click", () => handleButtonConfig());
  btnChats.addEventListener("click", () => {
    if (menuConfig.classList.contains("show-config")) {
      menuConfig.classList.remove("show-config");
    }
  });

  //Funcion para mostrar ventana del chat
  const sectionChatOpen = document.querySelector("#section-chat-open");
  const sectionChats = document.querySelector("#section-chat");
  const chatCard = document.querySelector('.chat-card');
  const showChat = () => {
    sectionChats.classList.toggle('hidden');
    sectionChatOpen.classList.toggle('show');
  };

  chatCard.addEventListener("click", () => showChat())
})();
