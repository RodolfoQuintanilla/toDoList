import { useState } from "react";
import Formulario from "./components/Formulario";
import Informacion from "./components/Informacion";

function App() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const [editId, setEditId] = useState(null);

  const datosTarea = {
    id: Date.now(),
    text: tarea
  }

  const agregarTarea = () => {

    console.log(editId);

    if (editId) {
      const newTodo = listaTareas.map((item) =>
        item.id === editId ? { ...item, text: tarea } : item
      )
      setListaTareas(newTodo)
      setEditId(null)
    } else {
      setListaTareas([...listaTareas, datosTarea])
    }
    setTarea('')
  }


  const editar = (id) => {
    const tareaEditar = listaTareas.find((item) => item.id === id)
    
    console.log(tareaEditar);
    

  }


  return (
    <div className="contenedor">
      <Informacion
        listaTareas={listaTareas}
        editar={editar}
      />

      <br />
      <Formulario
        tarea={tarea}
        setTarea={setTarea}
        datosTarea={datosTarea}
        agregarTarea={agregarTarea}

      />
    </div>
  );
}

export default App;
