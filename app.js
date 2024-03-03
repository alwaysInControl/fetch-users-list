const usersList = document.querySelector('.users_list')
const refreshBtn = document.querySelector('.refresh_btn')

const getUsers = async () => {
  try {
    usersList.innerHTML = '';
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    data.forEach((user) => {
      const div = document.createElement('div')
      div.className = 'user_card'
      div.innerHTML = `
        <h2>Имя: ${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Номер телефона: ${user.phone}</p>
      `
      usersList.append(div)
    })
  } catch (err) {
    const errorMsg = document.createElement('div')
    errorMsg.className = 'error_msg'
    errorMsg.innerHTML = `<h2>Произошла ошибка загрузки данных. Пожалуйста, обновите страницу.</h2>`
    usersList.append(errorMsg)
  }
}

refreshBtn.addEventListener('click', getUsers);
getUsers()
