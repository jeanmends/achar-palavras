const blocoPalavras = document.getElementById("palavras");
const btnProcurar = document.getElementById("btn-procurar");
let letrasComIndex = '';
let quantidadeDeLetrasComIndadex = 0;   


btnProcurar.addEventListener("click", function(){
    letrasComIndex = '';
    quantidadeDeLetrasComIndadex = '';
    let quantidade = document.getElementById("quantidade-de-palavras").value;
    let letrasInclusas = document.getElementById("letras-para-incluir").value;
    //let letrasParaExcluir = document.getElementById("letras-para-excluir").value;
    palavrasHtml.innerHTML = '';
    getTxt(quantidade, letrasInclusas);

    document.querySelectorAll(".input-palavras").forEach(elemment => {
        if(elemment.value != ''){
            letrasComIndex+=elemment.value;
            quantidadeDeLetrasComIndadex++;
        }else{
            letrasComIndex+="0";
        }
    })

   // alert(letrasComIndex);
    
})


function criarInputs(n) {
    const container = document.getElementById('palavras-por-letras'); // Get the container element
    container.innerHTML = ''; // Clear any existing inputs
    
    for (let i = 0; i < n; i++) {
        // Create an input element
        const input = document.createElement('input');
        input.type = 'text'; // You can change this to other types like 'number', 'password', etc.
        input.maxLength = 1;
        input.className = 'input-palavras';
        
        // Append the input element to the container
        container.appendChild(input);
        container.appendChild(document.createElement('br')); // Optional line break for readability
    }
}

// Call the function with n = 5 (change this number to create more/less inputs)


document.getElementById("quantidade-de-palavras")
.addEventListener("input", (event) => {
    const quantiade = document.getElementById("quantidade-de-palavras").value;
    criarInputs(quantiade);
});

/*

const inputIncluir = document.getElementById("letras-para-incluir");

input.addEventListener("input", () => {
    let value = input.value.replace(/,/g, ""); // Remove as vírgulas existentes
    value = value.split("").join(","); // Adiciona vírgulas entre os caracteres
    input.value = value;
});

*/

function aplicarMascaraVirgula(inputElement) {
    inputElement.addEventListener("input", () => {
        let value = inputElement.value.replace(/,/g, ""); // Remove vírgulas existentes
        value = value.split("").join(","); // Adiciona vírgulas entre caracteres
        inputElement.value = value;
    });
}

document.querySelectorAll(".input-formulario").forEach((element, index) => {
    if(index != 0){
        aplicarMascaraVirgula(element);
    }
    
});