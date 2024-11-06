const Formulario = ({ tarea, setTarea, agregarTarea,editId }) => {

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
        <input type="button" value="enviar" onClick={agregarTarea} />
      </form>
    </div>
  );
};

export default Formulario;
