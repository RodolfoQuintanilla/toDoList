import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Informacion from "./components/Informacion";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  const inicilaLocal = () => {
    const localStorangeListaTarea = localStorage.getItem('listaTareas');
    return localStorangeListaTarea ? JSON.parse(localStorangeListaTarea) : []
  }

  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(inicilaLocal);
  const [editId, setEditId] = useState(null);

  const datosTarea = {
    id: Date.now(),
    text: tarea
  }

  useEffect(() => {
  localStorage.setItem("listaTareas", JSON.stringify(listaTareas))
  }, [listaTareas])

  const agregarTarea = (e) => {
    e.preventDefault();
    if (tarea === "") {
      alert("Debes ingresar una tarea");
    } else {
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
    setEditId(null)
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
