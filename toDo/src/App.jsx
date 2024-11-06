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

  const agregarTarea = (e) => {
    e.preventDefault();
    if (editId) {
      const newlistaTareas = listaTareas.map((item) =>
        item.id === editId ? { ...item, text: tarea } : item
      )
      setListaTareas(newlistaTareas);
      setEditId(null);

    } else {
      /*    setTarea(tarea) */
      setListaTareas([...listaTareas, datosTarea])
    }
    setTarea("")
  }

  const editar = (id) => {
    const trareaEditar = listaTareas.filter(item => item.id === id)

    if (trareaEditar) {
      setTarea(trareaEditar[0].text);
      setEditId(id);
    }
  }

  const eliminar = (id) => {
    const upDateListaTareas = listaTareas.filter((item) => item.id !== id)
    setListaTareas(upDateListaTareas);
  }

  return (
    <>
      <div className="info">
        <Informacion
          listaTareas={listaTareas}
          editar={editar}
          eliminar={eliminar}
        />
      </div>
      <br />

      <div className="form">
        <Formulario
          tarea={tarea}
          setTarea={setTarea}
          datosTarea={datosTarea}
          agregarTarea={agregarTarea}
          editId={editId}
        />
      </div>
    </>
  );
}

export default App;
