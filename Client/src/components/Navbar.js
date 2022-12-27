import './Navbar.css'
function Navbar(props){
    const Links = props.Links
    return(
        <div className="navbar">
            <h2 className='empresa'><div className='first'>Sid</div>RECPA</h2>
            {Links.map((Links, index)=> 
            <li key={index}><a  id= {Links.id} href={Links.link}>{Links.nome}</a></li>)}
        </div>
    )
}

export default Navbar