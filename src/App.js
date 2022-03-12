//import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje';

const App = () => {
 return (
   <div className= "APP">
     <Mensaje color = "green" message = 'Ejemplo de parametro'/>
     <Mensaje color = "yellow" message = 'Curso de react'/>
     <Mensaje color = "red" message = 'Desde cero'/>
   </div>
 )
}

export default App;
