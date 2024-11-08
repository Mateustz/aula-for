// Quando temos uma quantidade pré definida de retições utilizamos o for 

//o for possui 3 parâmetros (contador; condição; modificador)

// para repetir 3 vezes:

for (var i = 0; i < 3; i++) {
    console.log("o i vale: ", i);
}


// todo array pode ser percorrido com for 
console.log("Imprimindo o array");

var frutas = ['Maça', 'Banana' , 'uva' , 'pessego' , 'Mamão' , 'Melão']; 

for (var i = 0; i <frutas.length; i++){

    console.log("A fruta[" + i + "] é: " + frutas[i]);
    console.log("A fruta[" , i, "] é: " , frutas[i]);
    console.log(`A fruta[${i}] é: ${frutas[i]}`);

}