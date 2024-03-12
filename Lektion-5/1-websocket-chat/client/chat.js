const socket = io();

const userName = new URLSearchParams(window.location.search).get('username')
document.querySelector('#me').innerText = userName;

const messages = document.querySelector('.messages');




// När vi som klient har kopplat upp oss
socket.on('connect', () => {
  // Skapar eventet 'user' och skickar med användarnamnet
  socket.emit('user', userName)
})

// när en ny användare har anslutit
socket.on('new_user_connection', (feedbackString) => {
  // messages.innerHTML += `<p class="inline-feedback">${feedbackString}</p>`
  messages.appendChild(createElement('p', 'inline-feedback', feedbackString))
})



















// Helpers
// Bygg ihop ett element
const createElement = (type, className, text) => {
  const element = document.createElement(type)
  element.className = className ? className : ''
  element.innerText = text ? text : ''

  return element
}