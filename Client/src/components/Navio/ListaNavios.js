import './ListaNavios.css'
import Navio from './Navio'
import { useState, useEffect } from 'react';
function ListaNavios(){
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/navio/AccessAgenteKeyCorret`)
            .then((res) => res.json())
            .then((data) => {
                setInfos(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const navios = infos
    return (
        <div className='lista_box'>
            <h2>LISTA DE NAVIOS</h2>
            {navios.map((navios, index)=> <Navio key = {index} imo = {navios.imo} nome={navios.nome} 
            tipo={navios.tipo} maxcarga={navios.maxcarga} maxpassageiros ={navios.maxpassageiros}
            proprietario={navios.proprietario}></Navio>)}
            <a href='/CU_Navios'><button className='btn_addUser'>ADICIONAR NAVIO</button></a>
        </div>
    )
}

export default ListaNavios