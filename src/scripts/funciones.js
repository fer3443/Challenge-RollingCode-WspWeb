//funcion para renderizar chats
const renderChat = (users, cardContainer) => {
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "chat-card container";
    card.innerHTML = `
        <div class="chat-img-perfil">
					<img
						src="assets/imgperfil.jpeg"
						alt="imagen perfil"
						class="img-perfil-card"
					/>
      </div>
      <div class="chat-body">
        <div class="chat-name unread-color">
          <h3>${user.nombre}</h3>
          <p>${user.mensajes}</p>
        </div>
        <div class="chat-date">
          <p>12:00 p.m.</p>
          <div class="box-notification">
            <span class="notification">2</span>
            <span class="chevron" id=${user.userId}><i class="fa-solid fa-chevron-down"></i></span>
          </div>
        </div>
      </div>
      <div class="menu-options2" id="menu${user.userId}">
        <ul>
          <li>Archivar chat</li>
          <li>Silenciar notificaciones</li>
          <li>Eliminar chat</li>
          <li>Fijar chat</li>
          <li>Marcar como leído</li>
          <li>Bloquear</li>
        </ul>
      </div>
        `
    cardContainer.appendChild(card);
  });
  return cardContainer;
};

const handleButtonMenu2 = (allBtnChev) => {
  allBtnChev.forEach(btn => {
    const btnId = btn.id
    btn.addEventListener("click", () => {
      const menu2 = document.getElementById(`menu${btnId}`);
      menu2.classList.toggle("show-menu2")
    })
  })
}

export {renderChat, handleButtonMenu2};