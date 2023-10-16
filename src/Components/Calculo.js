
export default function Calculo({adultos, criancas, itens, bebidas}){
    // patinho = 40,99
    // cox duro = 27,99
    // maminha = 33,99
    // asa = 18,89
    // coração = 29,90
    // peito = 12,49
    // costela suina = 49,00
    // linguiça = 33,99
    // lombo = 29,99
    // pão de alho = 29,95
    // queijo = 65,90
    // farofa = 24,90
    // carvão = 45,90

    // suco = 10,00
    // cerveja = 10,00
    // vinho = 14,90
    // agua = 4,84

    
    const gramasAd = (500 / itens.length) * adultos;
    const gramasCri = (250 / itens.length) * criancas;
    const kgTotal = (gramasAd + gramasCri) / 1000;
    
    var tiposBebidas = bebidas.length;
    var bebidasAlcool = 0;
    if (bebidas.includes("Cerveja", undefined)) {
        tiposBebidas -= 1;
        bebidasAlcool += 1;
    }
    
    if (bebidas.includes("Vinho", undefined)) {
        tiposBebidas -= 1;
        bebidasAlcool += 1;
    }
    
    const lPessoas = ((750 / tiposBebidas) * (adultos + criancas)) / 1000;
    const lAlcool = ((250 / bebidasAlcool) * (adultos)) / 1000;
    
    precoTotal = 0;
    for (let i = 0; i < itens.length; i++) {
        switch (itens[i]) {
            case "Patinho":
                precoTotal += (kgTotal.toFixed(2) * 40.99);
                break;
        
            case "Coxão Duro":
                precoTotal += (kgTotal.toFixed(2) * 27.99);
                break;
        
            case "Maminha":
                precoTotal += (kgTotal.toFixed(2) * 27.99);
                break;
        
            case "Asa":
                precoTotal += (kgTotal.toFixed(2) * 18.89);
                break;
        
            case "Coração":
                precoTotal += (kgTotal.toFixed(2) * 29.90);
                break;
        
            case "Peito":
                precoTotal += (kgTotal.toFixed(2) * 12.49);
                break;
        
            case "Costela":
                precoTotal += (kgTotal.toFixed(2) * 49.00);
                break;
        
            case "Linguiça":
                precoTotal += (kgTotal.toFixed(2) * 33.99);
                break;
        
            case "Lombo":
                precoTotal += (kgTotal.toFixed(2) * 29.99);
                break;
        
            case "Pão de Alho":
                precoTotal += (kgTotal.toFixed(2) * 29.95);
                break;
        
            case "Queijo Coalho":
                precoTotal += (kgTotal.toFixed(2) * 65.90);
                break;
        
            default:
                break;
        };
    }

    for (let i = 0; i < bebidas.length; i++) {
        switch (bebidas[i]) {
            case "Suco":
                precoTotal += (lPessoas * 10);
                break;
        
            case "Cerveja":
                precoTotal += (lAlcool * 10);
                break;
        
            case "Vinho":
                precoTotal += (lAlcool * 14.90);
                break;
        
            case "Agua":
                precoTotal += (lPessoas * 4.84);
                break;
        
            default:
                break;
        };
        
    }

    const precoPorAdulto = precoTotal / adultos;
    return(precoPorAdulto);
}