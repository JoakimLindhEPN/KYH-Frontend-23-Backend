const output = document.querySelector('#output')
const _contacts = []

const getContacts = async () => {
  const res = await window.contacts.getAllContacts()
  res.forEach(contact => _contacts.push(contact))

  listContacts()
}

getContacts()

const listContacts = () => {
  output.innerHTML = ''
  _contacts.forEach(contact => {
    output.append(createContactElement(contact))
  })
}

const createElement = (type, className, text) => {
  const element = document.createElement(type)
  element.className = className ? className : ''
  element.innerText = text ? text : ''
  return element
}

const createContactElement = (contact) => {
  const contact_div = createElement('div', 'contact')
  const contactInfo_div = createElement('div', 'contact_info')
  const contactName_p = createElement('p', 'name', `${contact.firstName} ${contact.lastName}`)
  const phoneNumber_p = createElement('p', 'phone', `${contact.phoneNumber}`)
  const deleteBtn = createElement('button', 'del-btn', 'X')

  // Open edit window
  contactInfo_div.addEventListener('click', () => {
    window.edit.open(contact)
  })

  // Remove contact
  deleteBtn.addEventListener('click', async () => {
    const res = await window.contacts.delete(contact.id)
    if(res) {
      _contacts.splice(_contacts.findIndex(c => c.id === res.id), 1)
      // listContacts()
      contact_div.remove()
    }
  })

  contactInfo_div.append(contactName_p, phoneNumber_p)
  contact_div.append(contactInfo_div, deleteBtn)

  return contact_div
}


// Add a new Contact
document.querySelector('#addContactForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const formError = document.querySelector('#form-error')
  formError.style.display = 'none'

  const first = document.querySelector('#firstName')
  const last = document.querySelector('#lastName')
  const phone = document.querySelector('#phone')

  const firstName = first.value.trim()
  const lastName = last.value.trim()
  const phoneNumber = phone.value.trim()
  
  if(firstName === '' || lastName === '' || phoneNumber === '') {
    formError.style.display = 'block'
    return
  }

  const contact = {
    firstName,
    lastName,
    phoneNumber
  }

  const res = await window.contacts.add(contact)

  first.value = ''
  last.value = ''
  phone.value = ''

  _contacts.push(res)
  output.append(createContactElement(res))
})