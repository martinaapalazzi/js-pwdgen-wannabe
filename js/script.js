
const nome = prompt("Come ti chiami?")
    
const cognome = prompt("Qual'è il tuo cognome?")

const colore = prompt("Qual'è il tuo colore preferito?")


const password = nome + cognome + colore + 114

console.log(password)

document.writeln ( `${password}` )

const myElement = document.getElementById('card')
myElement.innerHTML = password;