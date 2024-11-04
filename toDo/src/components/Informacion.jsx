const Informacion = ({ listaTareas }) => {

    return (
        <div>
            <h1>Info aqui</h1>
            <ul>
                {listaTareas.map((item) => (
                    <li key={item.id}>{item.text}  <button >editar</button> </li>
                ))}
            </ul>
        </div>
    );
};

export default Informacion;
