// Mensajes predefinidos
const messages = [
    { sender: "bot", text: "Hola, ¿cómo estás?" },
    { sender: "user", text: "Bien, ¿y tú?" },
    { sender: "bot", text: "Yo también, gracias por preguntar 😊." },
    { sender: "bot", text: "¿Sabías que hay algo que siempre he querido decirte?" },
    { sender: "user", text: "¿Qué cosa?" },
    { sender: "bot", text: "Bueno... no es fácil de explicar, pero intentaré..." },
    { sender: "bot", text: "Me gustas mucho y quería saber si te gustaría dar un paso más conmigo. ¿Qué dices?" }
  ];
  
  let currentMessageIndex = 0;
  
  // Referencias a elementos HTML
  const chatBox = document.getElementById("chatBox");
  const nextBtn = document.getElementById("nextBtn");
  
  // Función para mostrar el siguiente mensaje
  function showNextMessage() {
    if (currentMessageIndex < messages.length) {
      const message = messages[currentMessageIndex];
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", message.sender === "bot" ? "bot-message" : "user-message");
      messageDiv.textContent = message.text;
      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight; // Scrollea hacia el final del chat
      currentMessageIndex++;
    }
  
    // Desactivar botón si es el último mensaje
    if (currentMessageIndex === messages.length) {
      nextBtn.disabled = true;
      showDeclarationButtons();
    }
  }
  
  // Mostrar botones para respuesta final
  function showDeclarationButtons() {
    const footer = document.getElementById("chatFooter");
    footer.innerHTML = `
      <button onclick="handleResponse(true)">Sí 💖</button>
      <button onclick="handleResponse(false)">Déjame pensarlo...</button>
    `;
  }
  
  function handleResponse(isPositive) {
    if (isPositive) {
      // Redirigir a flower.html si selecciona "Sí 💖"
      window.location.href = "index1.html";
    } else {
      // Mostrar un mensaje o realizar otra acción
      alert("Tómate tu tiempo, aquí estaré esperando 😊");
    }
  }
  
  // Inicializar evento del botón "Siguiente"
  nextBtn.addEventListener("click", showNextMessage);
  
  // Mostrar el primer mensaje automáticamente
  showNextMessage();
  