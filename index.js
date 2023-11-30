function somatorioDivisiveis3ou5(numero){
    let somatorio =0;

    for (let numeroAtual = 1; numeroAtual < numero; numeroAtual++){

        if(numeroAtual %3 ===0 || numeroAtual %5===0){
            somatorio+= numeroAtual
        }
    }

    return somatorio;
}


console.log(somatorioDivisiveis3ou5(10));
console.log(somatorioDivisiveis3ou5(11));