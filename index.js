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
    menuConfig.classList.add("show-config");
    btnConfig.classList.add('btn-clicked2');
    btnChats.classList.remove('btn-clicked2');
  };
  btnConfig.addEventListener("click", () => handleButtonConfig());
  btnChats.addEventListener("click", () => {
    if (menuConfig.classList.contains("show-config")) {
      btnChats.classList.add('btn-clicked2')
      menuConfig.classList.remove("show-config");
      btnConfig.classList.remove('btn-clicked2')
    }
  });

  //Funcion para mostrar ventana del chat
  const sectionChatOpen = document.querySelector("#section-chat-open");
  const sectionChats = document.querySelector("#section-chat");
  const chatName = document.querySelector('.chat-name');
  const showChat = () => {
    sectionChats.classList.toggle('hidden');
    sectionChatOpen.classList.toggle('show');
  };

  chatName.addEventListener("click", () => showChat())
})();
