import React, { useState } from 'react';
import axios from 'axios';
import Login from './login';

function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signup, setSign]=useState(false);
    const [log, setLog]=useState(false);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handLogin=(event)=>{
        setLog(true);
    }
        
    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3000/user/add', { username, password })
          .then((response) => {
            if (response.data === false) {
                setSign(false);
            } else {
                setSign(true);
              
            }
          })
          .catch((error) => {
            
            console.error(error);
          }); 
      };  
    
    if(signup){
        return(
            <React.StrictMode>
                <Login/>
            </React.StrictMode>
        )
    }
    if(log){
        return(
            <React.StrictMode>
                <Login/>
            </React.StrictMode>
        )
    }


    
    return (
    

    
        <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    
       <div className="signin"> 
    
        <div className="content"> 
    
         <h2>Sign up</h2> 
    
         <form className="form" onSubmit={handleSubmit}>
    
          <div className="inputBox"> 
    
          <input type="text" value={username} onChange={handleUsernameChange} placeholder='Username'/>
    
          </div> 
    
          <div className="inputBox"> 
    
          <input type="password" value={password} onChange={handlePasswordChange} placeholder='password'/>
    
          </div> 
    
          <div className="links"> <a href="#">Forgot Password</a> <a onClick={handLogin}>Login</a> </div>
    
          <div className="inputBox"> 
    
          <input type="submit" value="Sign up"/> 
    
          </div> 
    
          </form> 
    
          
    
        </div>
    
        </div> 
    
       
    
      </section>
      
      );
}

export default Signup;