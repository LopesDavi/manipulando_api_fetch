//1º - URL que iremos utilizar
const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    .then(response => response.json()) // -> Se tudo der certo
    .then(data => (renderApiResult.textContent = JSON.stringify(data))) // -> Buscar os dados existentes na API, adicionar no HTML através do id criado, falar que é um conteúdo de texto, trasformar pra JSON.stringfy e receber esse 'data' já tratado
    .catch(error => console.error(error)) // -> Se der algum erro
}
getUsers()

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}
getUser()

//Utilizando o método POST (Adicionando - Passar dados)

//Usuário que será passado para dentro da API
const newUser = {
  name: 'Rodrigo Peixoto',
  avatar: 'https://picsum.photos/200/300',
  city: 'Rio Branco'
}

//Function para adicionar o user
function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error))
}

//Executando a função
addUser(newUser)
