function ex1(a){
    if (a%3 === 0){
        console.log('Es multiple de 3')
    }
    if (a%7 === 0){
        console.log('Es multiple de 7')
    }
    if ((a%3 !== 0) && (a%7 !== 0)){
        console.log('No es multiple de 3 ni 7')
    }
}

ex1(14);
ex1(6);
ex1(11);

