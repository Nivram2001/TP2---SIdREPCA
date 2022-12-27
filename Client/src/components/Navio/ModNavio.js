import './ModNavio.css'
import { useState } from 'react'

function ModNavio() {
    const [imo, setImo] = useState()
    const [nome, setNome] = useState()
    const [tipo, setTipo] = useState()
    const [maxCarga, setMaxCarga] = useState()
    const [maxPassageiros, setMaxPassageiros] = useState()
    const [proprietatio, setProprietario] = useState()

    const handleImoChange = (e) => {
        setImo(e.target.value)
    }

    const handleNomeChange = (e) => {
        setNome(e.target.value)
    }
    const handleTipoChange = (e) => {
        setTipo(e.target.value)
    }
    const handleMaxCargaChange = (e) => {
        setMaxCarga(e.target.value)
    }
    const handleMaxPassageirosChange = (e) => {
        setMaxPassageiros(e.target.value)
    }
    const handleProprietarioChange = (e) => {
        setProprietario(e.target.value)
    }
    const handleNavioSubmit = (e) => {
        let navio = {
            "imo": imo,
            "nome": nome,
            "maxcargas": maxCarga,
            "tipo":tipo,
            "maxpassageiros": maxPassageiros,
            "proprietario": proprietatio,
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(navio)
        }
        fetch('http://localhost:8080/navio/AccessAgenteKeyCorret/novonavio', options).then(data => {
            if (!data.ok) {
                throw Error(data.status);
                alert('error')
            } else {
                alert('success')

            }
            return data.json()
        }).then(navio => {
            console.log(navio)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <form onSubmit={(e) => { handleNavioSubmit(e) }} className='box'>
            <h2>Navio</h2>
            <hr></hr>
            <div className='inputs'>
                <h4>IMO:
                    <input placeholder='IMO do Navio' type='text'
                        value={imo} onChange={(e) => { handleImoChange(e) }} required></input></h4>
                <h4>Nome:
                    <input placeholder='Nome do Navio' type='text' required
                        value={nome} onChange={(e) => { handleNomeChange(e) }}></input></h4>
                <h4>Tipo:
                    <input placeholder='Passageiros e/ou Carga' type='text' required
                        value={tipo} onChange={(e) => { handleTipoChange(e) }}></input></h4>
                <h4>maxcarga:
                    <input placeholder='Máximo de carga' type='number' required
                        value={maxCarga} onChange={(e) => { handleMaxCargaChange(e) }}></input></h4>
                <h4>maxpassageiros:
                    <input placeholder='Máximo de passageiros' type='number' required
                        value={maxPassageiros} onChange={(e) => { handleMaxPassageirosChange(e) }}></input></h4>
                <h4>proprietario:
                    <input placeholder='Proprietario do Navio' type='text' required
                        value={proprietatio} onChange={(e) => { handleProprietarioChange(e) }}></input></h4>
            </div>
            <div>
                <button type='submit' value='submit' className='btn_confirm'>Confirm</button>
                <a href='/Navios'><button className='btn_cancel'>Cancel</button></a>
            </div>
        </form>
    )
}

export default ModNavio