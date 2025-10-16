import { useState } from 'react'; 
import "./App.css";
import Search from './pages/Search';

 

function App() { 
 const [searchTerm, setSearchTerm] = useState(''); 

 const handleSearch = (event) => { 
setSearchTerm(event.target.value);
 } 

//the bonus of Lesson 8
const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
 return ( 
   <div> 
     <h1>Search App</h1> 
     <Search search={searchTerm} onSearch={handleSearch} /> 
     <p>Searching for: {searchTerm}</p> 

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
   </div> 
 ); 
 } 

export default App;