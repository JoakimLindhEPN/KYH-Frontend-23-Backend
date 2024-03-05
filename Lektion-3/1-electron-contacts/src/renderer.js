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
}