module.exports = {

    create(req, res) {

        const { valorDaCompra, valorDoPagamento } = req.body;

        console.log(valorDaCompra, valorDoPagamento)
        var quantidade = 0;
        var notasDeCem = 0;
        var notasDeDez = 0;
        var notasDeUm = 0;
        var troco = 0;
        var resto1 = 0;
        var resto2 = 0;
        

        troco = valorDoPagamento - valorDaCompra;

        notasDeCem = Math.floor(troco/100);
        resto1 = troco % 100;

        notasDeDez = Math.floor(resto1/10);
        resto2 = resto1 % 10;

        notasDeUm = resto1 % 10;
        
        quantidade = notasDeCem + notasDeDez + notasDeUm;

        console.log(notasDeCem, notasDeDez, notasDeUm, quantidade, troco)

        var data = [{
            notasDeCem: notasDeCem, 
            notasDeDez: notasDeDez,
            notasDeUm: notasDeUm,
            quantidade: quantidade, 
            troco: troco}]

        res.json(data)
    }


};