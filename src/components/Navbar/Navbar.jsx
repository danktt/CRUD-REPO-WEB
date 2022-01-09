import './styles.css';


const Navbar = ({onLogout}) => {
  return(
      <div className="nav">
        <h1 className="logo">Repo Of DevS</h1>
        <button onClick={onLogout}>Sair</button>
      </div>
  ) 
}


export default Navbar;