
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import "./styles.css";


const Login = () => {

  const { authenticated, user, login } = useContext(AuthContext);

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleLogin = async () => {
    console.log(email, password);
    login(email, password)


    


  }


  return ( 
    <div id="login">
      <p>authenticated: {JSON.stringify(authenticated)}</p>
      <p>Email: {JSON.stringify(user)}</p>
      <h1 className="title">Login</h1>
      <div className="form">
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
           type="email"
           name="email"
           id="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
        </div>

        <div className="field">
          <label htmlFor="password">Senha:</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="acitons">
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
   );
}

export default Login;