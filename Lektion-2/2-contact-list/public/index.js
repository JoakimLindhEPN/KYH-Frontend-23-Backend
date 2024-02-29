const getContacts = async () => {
  const res = await fetch('/api/contacts')
  const data = await res.json()
  console.log({res, data})
}
getContacts()