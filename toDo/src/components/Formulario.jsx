const Formulario = ({ tarea, setTarea, listaTareas, setListaTareas, datosTarea, editId, setEditId }) => {



  const agregarTarea = () => {
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

 

  return (
    <div>
      <h1>Formulario</h1>
      <form>
        <input
          type="text"
          placeholder="Agrega una Tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <input type="button" value="Enviar" onClick={agregarTarea} />
      </form>
    </div>
  );
};

export default Formulario;
