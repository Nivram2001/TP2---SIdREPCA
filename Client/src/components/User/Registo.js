import './Registo.css'
import { useState } from 'react'
function Registo() {

    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [admin, setAdmin] = useState(false)
    const [key, setKey] = useState('')

    const handleNameChange = (e) => {
        setNome(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value)
    }
    const handleAdminChange = (e) => {
        setAdmin(e.target.checked)
    }

    const handleKeyChange = (e) => {
        setKey(e.target.value)
    }

    const handleSubmit = (e) => {
        if (password !== confPassword) {
            alert('Passwords are no the same! Try again!')
        } else if (key !== "AccessKeyCorret") {
            alert('Access key incorrect! Try again!')
        } else {
            let registo = {
                "nome": nome,
                "password": password,
                "admin": admin,
                "valido": true
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registo)
            }
            fetch('http://localhost:8080/user/AccessKeyCorret/novouser', options).then(data => {
                if (!data.ok) {
                    throw Error(data.status);
                } else {
                    alert('success')
                }
                return data.json()
            }).then(registo => {
                console.log(registo)
            }).catch(e => {
                console.log(e)
            })
        }
    }


    return (
        <form onSubmit={(e) => { handleSubmit(e) }} className='registo-box'>
            <h2>SigUp</h2>
            <div className='credenciais'>
                <h3>Name</h3>
                <input type='text' required value={nome} onChange={(e) => { handleNameChange(e) }}></input>
                <h3>Password</h3>
                <input type='password' required value={password} onChange={(e) => { handlePasswordChange(e) }}></input>
                <h3>Confirm password</h3>
                <input type='password' required value={confPassword} onChange={(e) => { handleConfPasswordChange(e) }}></input>
                <h3 className='admin'>Admin
                    <input type='checkbox' className='check' checked={admin} onChange={(e) => handleAdminChange(e)}></input>
                </h3>
                <h3>Confirm key</h3>
                <input type='password' required value={key} onChange={(e) => { handleKeyChange(e) }}></input>
            </div>
            <button type='submit' value='submit'>Confirm</button>
            <h4><a href='/'>Login</a></h4>
        </form>
    )
}

export default Registo