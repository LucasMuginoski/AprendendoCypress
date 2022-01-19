// Simulando o rebimento de dados por API
var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Scott Lang'];

function listarVingadores() {
    //zerar e após zerar criar lista de maneira dinamica

    var ul = document.getElementById('vingadores')
    ul.innerHTML = ''
    avengers.forEach(function (a) {
        var li = document.createElement('li') //criar li
        var text = document.createTextNode(a) //criar texto
        li.appendChild(text) //vinculo li com texto (nome dos vingadores)
        ul.appendChild(li) //vinculo ul com li 
    })
}