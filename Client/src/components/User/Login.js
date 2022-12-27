import './Login.css'
import { useState, useEffect } from 'react';
import bcryptjs from 'bcryptjs';
import { useNavigate } from 'react-router-dom'
function Login(props) {

    sessionStorage.setItem("logged", false)
    sessionStorage.setItem("admin",false)

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [infos, setInfos] = useState([])

    const navigate = useNavigate()

    const handleNomeChange = (e) => {
        setNome(e.target.value)
    }
    const handleSenhaChange = (e) => {
        setSenha(e.target.value)
    }
    useEffect(() => {

        fetch(`http://localhost:8080/user/AccessKeyCorret`)
            .then((res) => res.json())
            .then((data) => {
                setInfos(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    const users = infos
    let userLogged = -1

    for (let i = 0; i < users.length; i++) {
        if (users[i].nome === nome) {
            bcryptjs.compare(senha, users[i].password, async (err, result) => {
                if (result) {
                    userLogged = users[i].id
                    if(users[i].admin){
                        sessionStorage.setItem('admin',true)
                    }
                }
                else {
                }
            });
        }
    }

    const handleLoginSubmit = async () => {
        if (userLogged >= 0) {
            sessionStorage.setItem("logged", true)
            navigate('/welcome')
        }
    }

    return (
        <form onSubmit={() => handleLoginSubmit()} className="login-box">
            <h1>SigIn</h1>
            <div className='credenciais'>
                <h3>Name</h3>
                <input className='login' type='text' required
                    value={nome} onChange={(e) => { handleNomeChange(e) }}></input>
                <h3>Password</h3>
                <input className='login' type='password' required
                    value={senha} onChange={(e) => { handleSenhaChange(e) }}></input>
            </div>
            <button type='submit' value='submit'>Login</button>
            <h5><a href='/Registo'>Registo</a></h5>
        </form>
    )

}

export default Login