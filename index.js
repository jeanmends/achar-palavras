let palavrasHtml = document.getElementById("palavras");
let todasAsPalavras = [];
function getTxt(quantidade, texto){
  fetch("palavras.txt")
  .then((res) => res.text())
  .then((text) => {
    // mapeando o texto para seperar as palavaras e remover os acentos"
    const myArray = text.split("\n").map(line => line.trim()
    .toLocaleLowerCase()
    /* .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') */);
    /*
    myArray.forEach(element => {
      todasAsPalavras.push(element);
    });
    */
    
    getPalavras(myArray, quantidade, texto);
    })
  .catch((e) => console.error(e));
}


  function getPalavras(array, quantidade, texto){
    //as letras que fazem parte da palavra
    const aux = texto.split(",").map(line => line.trim());
    
    const palavrasSelecionadas = array.filter((word) => word.length == quantidade);
    
    includesLetters(palavrasSelecionadas, aux);
  }


  function includesLetters(myArray, letters){ 
    console.log("quantidade de palavras: "+myArray.length + " letters: "+letters )
    const containsLetters = []; 
    for(let i = 0; i < myArray.length; i++){
      let aux = 0;
      for(let j = 0; j < letters.length; j++){
        let contexto = myArray[i].normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        if(contexto.includes(letters[j])){
          aux++;
        }
      }
      if(aux == letters.length){
      containsLetters.push(myArray[i]);
      }

    }
    //as letras que não fazem parte da palavra
    let letrasParaExcluir = document.getElementById("letras-para-excluir").value
    if(letrasParaExcluir == ''){
      letrasParaExcluir = "!";
    }
    const theLetters = letrasParaExcluir.split(",");
    console.log(theLetters);

    notIncludesLetters(containsLetters, theLetters)
  }

  function notIncludesLetters(myArray, letters){

    //console.log()
    
    let notFinded = []; 
    
    for(let i = 0; i < myArray.length; i++){
      let aux = 0;
     
      for(let j = 0; j < letters.length; j++){
        let contexto = myArray[i].normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      
        if(!contexto.includes(letters[j])){
          aux++;
        }

      }
      if(aux == letters.length){
        notFinded.push(myArray[i]);
      }

    }
   const byNow = letrasComIndex;
   const quantidade = quantidadeDeLetrasComIndadex;
   //console.log("antes de ir pro findBy " + notFinded);
   findByIndexes(notFinded, byNow, quantidadeDeLetrasComIndadex)

  }

  function findByIndexes(myArray, letters, count){
    const mostrarTexto = [];
    //console.log(myArray.length);
    if (count != 0){
      for (let i = 0; i < myArray.length; i++){

        let text = myArray[i].normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
        let aux = 0;

        for (let j = 0; j < text.length; j++){          
          if(text[j] == letters[j]){           
            aux++;
          }
        }

        if(aux == count){
         // if (text[5] != '!'){
            console.log(myArray[i]);        
            mostrarTexto.push(myArray[i]);            
        //  }

        }
        
      }        
      mostrarNoLayour(mostrarTexto);
    }else{
      mostrarNoLayour(myArray);
    }
    

  }

  function mostrarNoLayour(array){
    palavrasHtml.innerHTML = '';
    let contadorDePalavras = 0;
    let html = '';
    array.forEach(element => {
      contadorDePalavras++;
      html += `
       <p>${element}</p>
      `;
    })
    document.getElementById("contador-de-palavaras").innerHTML = "Quantidade: "+ contadorDePalavras;
    palavrasHtml.innerHTML = html;
  
  }

