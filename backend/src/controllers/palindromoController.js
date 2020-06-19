module.exports = {

    create(req, res) {

        const { palavra } = req.body;
        const caracteres = palavra.toString();
        const charSplit = palavra.split('');
 
        if(caracteres.length === 2 && charSplit[0] === charSplit[1]){
            
            res.json('É um palíndromo de 2 dígitos')
            
        }

        if(caracteres.length === 3 && charSplit[0] === charSplit[2]){
            
            res.json('É um palíndromo de 3 dígitos')
            
        }

        if(caracteres.length === 4 && charSplit[0] === charSplit[3] && charSplit[1] === charSplit[2]){
   
                res.json('É um palíndromo de 4 dígitos')
        }

        if(caracteres.length === 5 && charSplit[0] === charSplit[4] && charSplit[1] === charSplit[3]){

                res.json('É um palíndromo de 5 dígitos')
        }

        if(caracteres.length === 6 && charSplit[0] === charSplit[5] && charSplit[1] === charSplit[4] &&
            charSplit[2] === charSplit[3]){

                res.json('É um palíndromo de 6 dígitos')
        }

        if(caracteres.length === 7 && charSplit[0] === charSplit[6] && charSplit[1] === charSplit[5] && 
            charSplit[2] === charSplit[4]){

                res.json('É um palíndromo de 7 dígitos')
        }

        if( caracteres.length > 7){
            res.json('Só pode digitar até 7 caracteres')
        }

        else res.json('Não é um palíndromo');
        
    }
};