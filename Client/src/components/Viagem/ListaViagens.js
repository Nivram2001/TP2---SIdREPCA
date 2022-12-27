import './ListaViagens.css'
import Viagem from './Viagem'
import { useState, useEffect } from 'react';

function ListaViagens(){
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/viagem/AccessAgenteKeyCorret')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInfos(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const viagens = infos
    return (
        <div className='lista_box'>
            <h2>LISTA DE VIAGENS</h2>
            {viagens.map((viagens, index)=> <Viagem key={index} imo = {viagens.imo} porto_partida={viagens.porto_partida} 
            id={viagens.id} porto_chegada={viagens.porto_chegada} horario_partida ={viagens.horario_partida}
            horario_chegada={viagens.horario_chegada} qtd_carga={viagens.qtd_carga} 
            qtd_passageiros={viagens.qtd_passageiros} user = {viagens.user}></Viagem>)}
            <a href='/CU_Viagens'><button className='btn_addUser'>ADICIONAR VIAGEM</button></a>
        </div>
    )
}
export default ListaViagens