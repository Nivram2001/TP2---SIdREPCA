import Modifier from '../components/Navio/ModNavio'
import Navbar from '../components/Navbar'

function CU_Navios(){
    return(
        <>
            <Navbar Links={[{id: 'white', nome: 'VIAGEM', link:'/Viagens'},{id: 'blue', nome: 'NAVIO', link:'/Navios'},
            {id: 'white', nome: 'AGENTE', link:'/Agentes'},{id: 'white', nome: 'LOGOUT', link:'/'}]}/>
            <Modifier/>
        </>
    )
}

export default CU_Navios