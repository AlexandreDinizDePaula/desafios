import React, { useState } from "react";
import Axios from "axios"

import './styles.css'

export default function Desafio1() {

    const[palavra, setPalavra] = useState('');
    const[resultado, setResultado] = useState('');

    async function handlePalindromo(e){

        e.preventDefault();

        try {
            
            const res = await Axios.post('http://localhost:3001/ispalindromo', {palavra});

            setResultado(res.data);
            console.log(res.data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='desafio1-container'>

            <h2>É um palíndromo?</h2>
            <h4>Digite uma palavra ou sequência de número de até 7 dígitos</h4>

            <form className='desafio1-form' onSubmit={handlePalindromo}>
                <div className="palindromoInput">
                    <label htmlFor='palavra'>Digite aqui:</label>
                    <input
                        id="palavra"
                        value={palavra}
                        onChange={e => setPalavra(e.target.value)}
                    />
                </div>
                <button className="button" type='submit'>Verificar</button>
            </form>

            <p className='resultado'>{resultado}</p>

        </div>
    )

};

