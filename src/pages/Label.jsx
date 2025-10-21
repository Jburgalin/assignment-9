function InputWithLabel(props) {
 return ( 
   <>  
     <label htmlFor={props.id}>{props.children}</label> 
     <input 
       id={props.id} 
       type="text" 
       value={props.value} 
       onChange={props.onInputChange} 
     /> 
   </> 
 ); 
} 
 
export default InputWithLabel; 
