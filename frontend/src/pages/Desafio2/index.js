import React, { useState } from "react";
import Axios from "axios"

import './styles.css'

export default function Desafio2() {

    const [valorDaCompra, setValorDaCompra] = useState();
    const [valorDoPagamento, setValorDoPagamento] = useState();
    const [resultado, setResultado] = useState([]);

    async function handleResult(e) {

        e.preventDefault();

        const dados = { valorDaCompra, valorDoPagamento }

        try {

            const res = await Axios.post('http://localhost:3001/gettroco', dados);

            setResultado(res.data);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className='desafio2-container'>
            
            <form className='form-desafio2' onSubmit={handleResult}>
            <h2>Calculadora de Troco</h2>
                <table>
                    <tr>
                        <td>
                            <label htmlFor='valordaCompra'>Valor do Produto:</label>
                        </td>
                        <td
                        ><input
                                id="valordaCompra"
                                placeholder="Valor da compra"
                                value={valorDaCompra}
                                onChange={e => setValorDaCompra(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor='valorDoPagamento'>Valor do Pagamento:</label>
                        </td>
                        <td>
                            <input
                                id="valorDoPagamento"
                                placeholder="Valor do Pagamento"
                                value={valorDoPagamento}
                                onChange={e => setValorDoPagamento(e.target.value)}
                            />
                        </td>
                    </tr>
                </table>

                <button type='submit'>Resultado</button>

            </form>

            <ul className='desafio2-result'>

                {resultado.map(item => (
                    <li>
                        <p><strong>Troco: </strong>{item.troco}</p>
                        <p><strong>Número mínimo de notas: </strong>{item.quantidade}</p>
                        <p><strong>Notas de Cem: </strong>{item.notasDeCem}</p>
                        <p><strong>Notas de Dez: </strong>{item.notasDeDez}</p>
                        <p><strong>Notas de Um: </strong>{item.notasDeUm}</p>
                    </li>
                ))}

            </ul>

        </div>
    )
};

