import './ListaUser.css'
import User from './User'
import { useState, useEffect } from 'react';

const ListaUser= () => {
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        
        fetch(`http://localhost:8080/user/AccessKeyCorret`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInfos(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const users = infos
    return (
        <div className='lista_box'>
            <h2>LISTA DE AGENTES</h2>
            {users.map((users,index) => <User key = {index} Name={users.nome} id={users.id} admin={users.admin} valido={users.valido}></User>)}
        </div>
    )
}

export default ListaUser