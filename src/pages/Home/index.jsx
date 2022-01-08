
import './styles.css';

const Home = () => {

  const handleSearch = (query) => {
    console.log('query',query);
  }

  const handleClear = () => {
    console.log('clear');
  }

  const handleDelete = () => {
    console.log('delete');
  }

  return ( 
    <div id="main">
      <div className="nav">
        <h1 className="logo">Repo Of DevS</h1>
        <button onClick={()=>{console.log("Logout")}}>Sair</button>
    </div>

    <div className="search">
         <label htmlFor="query">Procurar:</label>
         <input 
          type="search" 
          name="query" 
          id="query" 
          />
         <button onClick={handleClear}>Limpar</button>
         <button onClick={handleSearch}>Procurar</button>  
    </div> 

    <div className="repositories">
      <h2 className="title">Repositórios</h2>

      <ul className="list">
        <li className="item">
          <div className="info">
            <div className="owner">Github</div>
            <div className="name">NodeJs</div>
          </div>
          <button onClick={handleDelete}>Apagar</button>
        </li>
      </ul>
    </div>



    <div className="new">
      <label htmlFor="new-repo">Novo Repo:</label>
      <input type="url" name="new-repo" id="new-repo"/>
      <button>Adicionar</button>
    </div>
      
    </div>
    
   );
}

export default Home;