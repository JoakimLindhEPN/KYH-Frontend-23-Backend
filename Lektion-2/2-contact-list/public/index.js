const output = document.querySelector('#output')
const contacts = []

const getContacts = async () => {
  try {
    const res = await fetch('/api/contacts')

    if(res.status !== 200) {
      throw new Error('something went wrong')
    }

    const data = await res.json()
    data.forEach(contact => contacts.push(contact))

    listContacts()
  } catch (error) {
    console.log(error.message)
  }
}
getContacts()

const listContacts = () => {
  output.innerHTML = ''
  contacts.forEach(contact => {
    output.innerHTML += `
    <div class="contact">
      <p class="name">${contact.firstName} ${contact.lastName}</p>
      <p class="phone">${contact.phoneNumber}</p>
      <button class="del-btn">X</button>
    </div>
    `
  })
}


const addContact = async (contact) => {
  const res = await fetch('/api/contacts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
  
  const data = await res.json()

  if(res.status !== 201) return

  contacts.push(data)
}

document.querySelector('#addContactForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const firstNameValue = document.querySelector('#firstName').value.trim()
  const lastNameValue = document.querySelector('#lastName').value.trim()
  const phoneValue = document.querySelector('#phone').value.trim()

  if(firstNameValue == '' || lastNameValue == '' || phoneValue == '') return

  await addContact({
    firstName: firstNameValue,
    lastName: lastNameValue,
    phoneNumber: phoneValue
  })

  listContacts()
})