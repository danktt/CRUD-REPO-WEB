import { useContext, useState } from 'react';
import './styles.css'
import { createRepository } from '../../services/api';
import { AuthContext } from '../../contexts/auth';




const NewRep = ({ setLoadingError, loadData}) => {
  const { user } = useContext(AuthContext);
  const [ newRepo, setNewRepo ] = useState('')



  const handleNewRepo = async(url) => {
    console.log('newRepo', url);
    
    try {
      await createRepository(user?.id, url);
      await loadData();
    } catch (error) {
      console.error(error)
      setLoadingError(true)
    }
  }
 
  
  return (
    <div className="new">
      <label htmlFor="new-repo">Novo Repo:</label>
      <input 
        type="url" 
        name="new-repo" 
        id="new-repo"
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
      />
      <button onClick={() =>handleNewRepo(newRepo)}>Adicionar</button>
    </div>
  )
}


export default NewRep;