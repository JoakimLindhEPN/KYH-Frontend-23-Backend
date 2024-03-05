const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const phoneNumber = document.querySelector('#phone')

let id = null;

window.edit.newContact((e, contact) => {
  console.log(contact)
  id = contact.id
  firstName.value = contact.firstName
  lastName.value = contact.lastName
  phoneNumber.value = contact.phoneNumber
})

document.querySelector('#editForm').addEventListener('submit', e => {
  e.preventDefault()

  const formError = document.querySelector('#form-error')
  formError.style.display = 'none'

  if(firstName.value.trim() === '' || lastName.value.trim() === '' || phoneNumber.value.trim() === '') {
    formError.style.display = 'block'
    return
  }

  const contact = {
    id,
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    phoneNumber: phoneNumber.value.trim()
  }

  window.edit.editContact(contact)
})