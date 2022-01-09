
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import NewRep from '../../components/NewRepo/NewRepo';
import Repo from '../../components/Repositories/Repo';
import Search from '../../components/Search/search';
import { AuthContext } from '../../contexts/auth';
import { getRepositories, destroyRepository } from '../../services/api';
import './styles.css';





const Home = () => {

  const { user } = useContext(AuthContext);

  const [repositories, setRepositories] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ loadingError, setLoadingError ] = useState(false);

  const loadData = async (query = '') => {
    try {
      const response = await getRepositories(user?.id , query);
      setRepositories(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoadingError(true)
    }
  }


  useEffect(() => {
    (async () => await loadData())();
  },[])


  const handleSearch = (query) => {
    loadData(query)
  }
  
  const handleLogout = () => {
    console.log('saiu');
  }


  const handleDeleteRepo = async (repository) => {
    console.log('delete Repo', repository);
    await destroyRepository(user?.id, repository._id)
    await loadData();
  }

  if(loadingError) {
    return (
      <div className="loading">
        <h1>Erro ao carregar os dados 🤕 <Link to="/">Voltar</Link>.</h1>
      </div>
    )
  }

  if(loading){
    return (
      <div className="loading">🏃‍♂️ Carregando...</div>
    )
  }


  return ( 
    <div id="main">
      <Navbar onLogout={handleLogout} />

      <Search onSearch={handleSearch} />
    
      <Repo onDeleteRepo={handleDeleteRepo} repositories={repositories} />
    

      <NewRep 
        loading={loading}
        setLoading={setLoading}
        setLoadingError={setLoadingError}   
        loadData={loadData}
      />

    
      
    </div>
    
   );
}

export default Home;