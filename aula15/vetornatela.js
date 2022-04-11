let valores = [8, 1, 7, 2, 4, 9]
    valores.sort() 
for(let pos=0; pos < valores.length; pos++){
    console.log(valores[pos])
}

for(let pos of valores){
    console.log(valores[pos])
}

for(let pos in valores){
    console.log(valores[pos])
}