

const Formulario = ({ tarea, setTarea, agregarTarea,editId }) => {

  return (
    <div>
   
      <form>
        <input className="input__form"
      
     
          type="text"
          placeholder="Agrega una Tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <input className="btn" type="button" value={!editId ? ('Agregar' ):('Editar')} onClick={agregarTarea} />
      </form>
    </div>
  );
};

export default Formulario;
