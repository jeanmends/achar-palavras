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

