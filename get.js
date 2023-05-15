//1º - URL que iremos utilizar
const url = 'http://localhost:5500/api'

//2º - Função para pegar os usuário da API
function getUsers() {
  fetch(url)
    .then(response => response.json()) // -> Se tudo der certo
    .then(data => (renderApiResult.textContent = JSON.stringify(data))) // -> Buscar os dados existentes na API, adicionar no HTML através do id criado, falar que é um conteúdo de texto, trasformar pra JSON.stringfy e receber esse 'data' já tratado
    .catch(error => console.error(error)) // -> Se der algum erro
}

//Executando function
getUsers()

//GET com Parâmetros
//Função para buscar dados de user único
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
