var nota = prompt("Posa la nota del teu examen")
switch (true) {
    case (nota >= 0 && nota <= 4.99):
        console.log('Insuficient')
        break;

    case (nota >= 5 && nota <= 5.99):
        console.log('Suficient')
        break;

    case (nota >= 6 && nota <= 6.99):
        console.log('Be')
        break;
    
    case (nota >= 7 && nota <= 8.99):
        console.log('Notable')
        break;

    case (nota >= 9 && nota <= 10.99):
        console.log('Excel·lent')
        break;
}



