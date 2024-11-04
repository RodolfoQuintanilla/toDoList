import { useState } from "react";
import Formulario from "./components/Formulario";
import Informacion from "./components/Informacion";

function App() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const [editId, setEditId] = useState(null);

  const datosTarea={
    id: Date.now(),
    text:tarea
  }





  return (
    <div className="contenedor">
      <Informacion listaTareas={listaTareas} />
      <br />
      <Formulario
        tarea={tarea}
        setTarea={setTarea}
        listaTareas={listaTareas}
        setListaTareas={setListaTareas}
        datosTarea={datosTarea}
        editId={editId}
      />
    </div>
  );
}

export default App;
