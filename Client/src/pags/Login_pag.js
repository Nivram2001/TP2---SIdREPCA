import Login from '../components/User/Login'
import Navbar from '../components/Navbar'

function Login_pag(props){
    return(
        <>
            <Navbar Links={[]}/>
            <Login logged={props.logged} />
        </>
    )
}

export default Login_pag