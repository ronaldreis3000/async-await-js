// Sintaxe:
/* 
function primeiraFuncao(){

    return new Promise((resolve) => { // Note que é possível utilizar return em uma promessa ao invés de associá-la a uma variável para então utilizar os métodos then e catch.
        setTimeout(() => {
            console.log("Esperou isso aqui!");
            resolve();
        }, 1000)
    })
}

async function segundaFuncao(){
    console.log('Iniciou');

    await primeiraFuncao();

    console.log('Terminou');
}

segundaFuncao();
 */

// -------------------------------------------------------------------------------------------------


// Exemplo prático

function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err));
}

async function showUserName(id){
    const user = await getUser(id);

    console.log(`O nome do usuário é: ${user.data.first_name}`);
}

showUserName(3);