import Viagem from '../components/Viagem/ListaViagens'
import Navbar from '../components/Navbar'

function Viagem_pag() {
    
    return (
        <>
            <Navbar Links={[{ id: 'blue', nome: 'VIAGEM', link: '/Viagens' }, { id: 'white', nome: 'NAVIO', link: '/Navios' },
            { id: 'white', nome: 'AGENTE', link: '/Agentes' }, { id: 'white', nome: 'LOGOUT', link: '/' }]} />
            <Viagem />
        </>
    )
}

export default Viagem_pag