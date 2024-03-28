function encontrarMaiorNumero(num1, num2, num3, num4, num5) {
    let maior = num1;

    if (num2 > maior) {
        maior = num2;
    }

    if (num3 > maior) {
        maior = num3;
    }

    if (num4 > maior) {
        maior = num4;
    }

    if (num5 > maior) {
        maior = num5;
    }

    return "O maior número é: " + maior;
}


console.log(encontrarMaiorNumero(10, 5, 23, 8, 15)); 
