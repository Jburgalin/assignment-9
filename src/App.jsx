import { useState, useEffect } from 'react'; 
import InputWithLabel from './pages/Label.jsx';

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
   return localStorage.getItem(key) || initialValue;
 });

 useEffect(() => {
  localStorage.setItem(key, value);
  }, [key, value]);

 return [value, setValue];
} 

function App() { 
 const [username, setUsername] = useLocalStorageState('username', ''); 
 const [color, setColor] = useLocalStorageState('color', '');
 
 return ( 
   <div> 
     <h1>Welcome!</h1> 
     <InputWithLabel 
       id="username" 
       value={username} 
       onInputChange={(e) => setUsername(e.target.value)}
     > 
       Username: 
     </InputWithLabel> 
      <InputWithLabel
        id="color"
        value={color}
        onInputChange={(e) => setColor(e.target.value)}
      >
        Favorite Color:
      </InputWithLabel>

     <p>Hello, {username || 'Guest'}!</p> 
      <p>Your favorite color is {color || 'unknown'}.</p>
   </div> 
 ); 
}

<InputWithLabel/>

export default App;