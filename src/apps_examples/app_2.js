import { ListOption } from '../components';

function App2() {
  const days = [{ id: 1, nombre: 'Lunes' }, { id: 2, nombre: 'Martes' }, { id: 3, nombre: 'Miercoles' }, { id: 4, nombre: 'Jueves' },]


  // map iuntera el array y retorna un nuevo

  return (

    <ul>
      {
        days.map(day => <ListOption key={day.id}>{day.nombre}</ListOption>)
      }

    </ul>


  );

} export default App2;
