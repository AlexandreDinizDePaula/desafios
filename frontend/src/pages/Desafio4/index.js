import React, { useState } from "react";
import Axios from "axios"

import './styles.css'

export default function Desafio4() {

    const [cep1, setCep1] = useState('');
    const [cep2, setCep2] = useState('');
    const [cep3, setCep3] = useState('');
    const [cep4, setCep4] = useState('');
    const [cep5, setCep5] = useState('');
    const [adress, setAdress] = useState([]);

    async function handleGetAdress(e) {

        e.preventDefault();

        const dados = { cep1, cep2, cep3, cep4, cep5 }
        try {

            const res = await Axios.post('http://localhost:3001/getceps', dados);

            setAdress(res.data);
            console.log(res.data)
        } catch (error) {

        }
    }

    return (
        <div className="desafio-container">

            <h2>Digite os CEP's Abaixo:</h2>
            <form className='desafio4-form' onSubmit={handleGetAdress}>

                <div className="cepInput">
                    <label for='cep1'>CEP 1:</label>
                    <input
                        id="cep1"
                        placeholder="Digite o primeiro CEP"
                        value={cep1}
                        onChange={e => setCep1(e.target.value)}
                    />
                </div>
                

                <div className="cepInput">
                    <label for='cep2'>CEP 2:</label>
                    <input
                        id="cep2"
                        placeholder="Digite o segundo CEP"
                        value={cep2}
                        onChange={e => setCep2(e.target.value)}
                    />
                </div>

                <div className="cepInput">
                    <label for='cep3'>CEP 3:</label>
                    <input
                        id='cep3'
                        placeholder="Digite o terceiro CEP"
                        value={cep3}
                        onChange={e => setCep3(e.target.value)}
                    />
                </div>

                <div className="cepInput">
                    <label for='cep4'>CEP 4:</label>
                    <input
                        id='cep4'
                        placeholder="Digite o quarto CEP"
                        value={cep4}
                        onChange={e => setCep4(e.target.value)}
                    />
                </div>

                <div className="cepInput">
                    <label for='cep5'>CEP 5:</label>
                    <input
                        id='cep5'
                        placeholder="Digite o quinto CEP"
                        value={cep5}
                        onChange={e => setCep5(e.target.value)}
                    />
                </div>

                <button className="button" type='submit'>Buscar</button>

            </form>

            <ul className='result'>

                {adress.map(item => (
                    <li className='resultItem'>
                        
                        <p><strong>Estado: </strong>{item.uf}</p>
                        <p><strong>Cidade: </strong>{item.localidade}</p>
                        <p><strong>Bairro: </strong>{item.bairro}</p>
                        <p><strong>Logradouro: </strong>{item.logradouro}</p>
                        <p><strong>Complemento: </strong>{item.complemento}</p>
                    </li>
                ))}

            </ul>

        </div>
    )

};

