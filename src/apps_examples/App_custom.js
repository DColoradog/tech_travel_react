/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/react-in-jsx-scope */
// nombre de las funciones con mauscula, como si fuera una clase
// desde un solo importador
import { ListOption } from '../components';



const customStyle = (backColor = '#9090ff') => ({
  backgroundColor: backColor,
  margin: '20px 30px'
})

function List() {
  return (
    <ul>
      <ListOption style={customStyle()} tiempo="frio">lunes</ListOption>
      <li>martes</li>
      <ListOption style={customStyle('#750757')}>miercoles</ListOption>
      <ListOption className="blue" >jueves</ListOption>
    </ul>



  );

}

// eslint-disable-next-line react/function-component-definition
const ErrorMessage = () => {
  return (
    <p>No hay lista</p>
  )
}


function App() {
  const isList = false;
  // primera forma
  // if (isList === false) {
  //   return <ErrorMessage />
  // }

  // segunda forma
  // if (!isList) {
  //   return <ErrorMessage />
  // }

  // return tanto para la primera ocmo para la segunda
  // return (
  //   <List />
  // );

  // tercera manera
  return (
    <>
      {
        isList ? <List /> : <ErrorMessage />
      }
    </>
  );

  // return (
  //   <>
  //     {isList && <List />}
  //   </>
  // );



} export default App;
// preferencia entre el style inline que la clase
// renderizar en el navegador



// sda manera de crear una funcion
// 

// import React from "react";
// const NuevoApp = React.createElement('p', null, 'hola mundo 2');
// export default NuevoApp;
// recive 3 argmunetis
// 1. tipo de elemtno a renderizar ( elemtno p)
// 2. propiedades del elemento se puede null
