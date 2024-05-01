import users from "./user.js";
import {renderChat, handleButtonMenu2} from "../src/scripts/funciones.js";
(() => {
  const cardContainer = document.querySelector("#content-chat-card");
  const btnMenu = document.querySelector("#buton-menu");
  const menuOptions = document.querySelector("#menu-options");
  renderChat(users,cardContainer);

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
 const menuOptions2 = document.querySelectorAll(".menu-options2")
  document.addEventListener("click", (event) => {
    let clicFueraMenu = true;
    menuOptions2.forEach(menu => {
        if (menu.contains(event.target)) {
            clicFueraMenu = false;
        }
    });
    allBtnChev.forEach(btn => {
        if (btn.contains(event.target)) {
            clicFueraMenu = false;
        }
    });
    // Si se hizo clic fuera de todos los menús y botones de chev, oculta los menús que están visibles
    if (clicFueraMenu) {
        menuOptions2.forEach(menu => {
            if (menu.classList.contains("show-menu2")) {
                menu.classList.remove("show-menu2");
            }
        });
    }
  });
})();
