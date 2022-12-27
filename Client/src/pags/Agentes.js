import User from '../components/User/ListaUser'
import Navbar from '../components/Navbar'

function Agentes(){
    return(
        <>
            <Navbar Links={[{id: 'white', nome: 'VIAGEM', link:'/Viagens'},{id: 'white', nome: 'NAVIO', link:'/Navios'},
            {id: 'blue', nome: 'AGENTE', link:'/Agentes'},{id: 'white', nome: 'LOGOUT', link:'/'}]}/>
            <User/>
        </>
    )
}

export default Agentes