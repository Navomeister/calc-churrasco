
export default async function Calculo({pessoas, itens, bebidas}){
    const gramasAd = (500 / itens.length) * pessoas.adultos;
    const gramasCri = (250 / itens.length) * pessoas.criancas;

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

    const mlPessoas = (750 / tiposBebidas) * (pessoas.adultos + pessoas.criancas);
    const mlAlcool = (250 / bebidasAlcool) * (pessoas.adultos);
    let totalItens = [];
    let totalBebidas = [];

    itens.forEach(element => {
        totalItens.concat({item: element, quant: gramasAd + gramasCri});
    });

    bebidas.forEach(element => {
        if (element == "Cerveja" || element == "Vinho") {
            totalBebidas.concat([{bebida: element, quant: mlAlcool}]);
        } else {
            totalBebidas.concat([{bebida: element, quant: mlPessoas}]);
        }
    });

    return({totalItens, totalBebidas});
}