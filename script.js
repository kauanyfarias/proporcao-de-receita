/* NÃO DEIXA NÚMEROS ABAIXO DE 0 */
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', () => {
    if (input.value < 0) input.value = 0
    })
    })

const calcular = document.getElementById('calcular')

calcular.addEventListener('click', () =>{
    /* RECEITAS */
    const qtdReceitas = document.getElementById('qtd-de-receitas').value
    const qtdReceitasFuturas = document.getElementById('qtd-de-receitas-futuras').value
    /* INGREDIENTES E PESOS ATUAIS*/
    let ingrediente1 = document.getElementById('ingrediente1').value
    let peso1 = document.getElementById('peso1').value
    let ingrediente2 = document.getElementById('ingrediente2').value
    let peso2 = document.getElementById('peso2').value
    let ingrediente3 = document.getElementById('ingrediente3').value
    let peso3 = document.getElementById('peso3').value
    let ingrediente4 = document.getElementById('ingrediente4').value
    let peso4 = document.getElementById('peso4').value
    let ingrediente5 = document.getElementById('ingrediente5').value
    let peso5 = document.getElementById('peso5').value
    let ingrediente6 = document.getElementById('ingrediente6').value
    let peso6 = document.getElementById('peso6').value 

    /* CONTA MATEMÁTICAS */
    let resultNovoPeso1 = (peso1/qtdReceitas)*qtdReceitasFuturas
    let resultNovoPeso2 = (peso2/qtdReceitas)*qtdReceitasFuturas
    let resultNovoPeso3 = (peso3/qtdReceitas)*qtdReceitasFuturas
    let resultNovoPeso4 = (peso4/qtdReceitas)*qtdReceitasFuturas
    let resultNovoPeso5 = (peso5/qtdReceitas)*qtdReceitasFuturas
    let resultNovoPeso6 = (peso6/qtdReceitas)*qtdReceitasFuturas
    

    /* NOVOS INGREDIENTES E PESOS */
    const rendimentoNovaReceita = document.getElementById('redimento-nova-receita')
    const novoIngrediente1 = document.getElementById('novo-ingrediente1')
    const novoPeso1 = document.getElementById('novo-peso1')
    const novoIngrediente2 = document.getElementById('novo-ingrediente2')
    const novoPeso2 = document.getElementById('novo-peso2')
    const novoIngrediente3 = document.getElementById('novo-ingrediente3')
    const novoPeso3 = document.getElementById('novo-peso3')
    const novoIngrediente4 = document.getElementById('novo-ingrediente4')
    const novoPeso4 = document.getElementById('novo-peso4')
    const novoIngrediente5 = document.getElementById('novo-ingrediente5')
    const novoPeso5 = document.getElementById('novo-peso5')
    const novoIngrediente6 = document.getElementById('novo-ingrediente6')
    const novoPeso6 = document.getElementById('novo-peso6')
    
    /* EXIBIÇÃO DE RESULTADOS */
    rendimentoNovaReceita.innerText = `Sua nova receita rende: ${qtdReceitasFuturas}`
    novoIngrediente1.innerText = `Ingrediente: ${ingrediente1}`
    novoPeso1.innerText = `Peso: ${resultNovoPeso1}`
    novoIngrediente2.innerText = `Ingrediente: ${ingrediente2}`
    novoPeso2.innerText = `Peso: ${resultNovoPeso2}`
    novoIngrediente3.innerText = `Ingrediente: ${ingrediente3}`
    novoPeso3.innerText = `Peso: ${resultNovoPeso3}`
    novoIngrediente4.innerText = `Ingrediente: ${ingrediente4}`
    novoPeso4.innerText = `Peso: ${resultNovoPeso4}`
    novoIngrediente5.innerText = `Ingrediente: ${ingrediente5}`
    novoPeso5.innerText = `Peso: ${resultNovoPeso5}`
    novoIngrediente6.innerText = `Ingrediente: ${ingrediente6}`
    novoPeso6.innerText = `Peso: ${resultNovoPeso6}`
})

