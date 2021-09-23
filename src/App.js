
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>

    <NavBar/>
    <ItemListContainer/>
    </div>

     
   
  );
}

export default App;


// import React, { Component, useState } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     /*
//     Estado
//     Basicamente inicializar informacion de mi componente
//     */
//     this.state = {
//       name: "Gustavo Adolfo",
//       age: 32,
//       hobbies: ["play soccer", "play chess", "dance"]
//     }
//   }

//   render() {
//     return <MyFirstComponent name={this.state.name} age={this.state.age} hobbies={this.state.hobbies} component={newComponent}/>
//   }
// }

// const App = () => {
//   const [name, setName] = useState("Gustavo Adolfo");
//   const [age, setAge] = useState(32);
//   const [hobbies, setHobbies] = useState(["play soccer", "play chess", "dance"]);

//   return <MyFirstComponent name={name} age={age} hobbies={hobbies} component={newComponent}/>
// }


// const MyFirstComponent = (props) => {
//   return (
//     <h1>{props.name} {props.age} {props.hobbies} {props.component({contentButton: 'Hacer click'})}</h1>
//   )
// }


// const newComponent = ({ contentButton }) => {
//   function callAlert() {
//     alert("Hello World!");
//   }
//   return <button type="button" onClick={callAlert}>{contentButton}</button>
// }

// export default App;



// const incrementar = () => {
//   if (contador < stock) {
//       setContador(contador + 1)
//   }
// }  <button onClick={incrementar}> + </button>



