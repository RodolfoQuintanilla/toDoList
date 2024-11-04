const Informacion = ({ listaTareas, editar }) => {



    return (
        <div>
            <h1>Info aqui</h1>
            <ul>
                {listaTareas.map((item) => (
                    <li key={item.id}>{item.text}  <button onClick={() => editar(item.id)}>editar</button> </li>
                ))}
            </ul>
        </div>
    );
};

export default Informacion;
