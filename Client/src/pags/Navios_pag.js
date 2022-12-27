import Navio from '../components/Navio/ListaNavios'
import Navbar from '../components/Navbar'

function Navio_pag(){
    return(
        <>
            <Navbar Links={[{id: 'white', nome: 'VIAGEM', link:'/Viagens'},{id: 'blue', nome: 'NAVIO', link:'/Navios'},
            {id: 'white', nome: 'AGENTE', link:'/Agentes'},{id: 'white', nome: 'LOGOUT', link:'/'}]}/>
            <Navio/>
        </>
    )
}

export default Navio_pag