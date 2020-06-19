const Axios = require('axios');

module.exports = {

    async create(req, res) {

        const {cep1, cep2, cep3, cep4, cep5} = req.body;

        const resposta =[];

        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${cep1}/json/`);
            resposta.push(response.data)
            
        } catch (error) {
            res.json(error);
        }       
        
        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${cep2}/json/`);
            resposta.push(response.data)
            
        } catch (error) {
            res.json(error);
        }    
     
        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${cep3}/json/`);
            resposta.push(response.data)
            
        } catch (error) {
            res.json(error);
        }    

        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${cep4}/json/`);
            resposta.push(response.data)
            
        } catch (error) {
            res.json(error);
        }    
       
        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${cep5}/json/`);
            resposta.push(response.data)
            
        } catch (error) {
            res.json(error);
        }    

        res.json(resposta);

    }
    

};