import Modifier from '../components/Viagem/ModViagem'
import Navbar from '../components/Navbar'

function CU_Viagens(){
    return(
        <>
            <Navbar Links={[{id: 'blue', nome: 'VIAGEM', link:'/Viagens'},{id: 'white', nome: 'NAVIO', link:'/Navios'},
            {id: 'white', nome: 'AGENTE', link:'/Agentes'},{id: 'white', nome: 'LOGOUT', link:'/'}]}/>
            <Modifier/>
        </>
    )
}

export default CU_Viagens