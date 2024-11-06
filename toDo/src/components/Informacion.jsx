/*  import  info  from "../css/info.css"; */

const Informacion = ({ listaTareas, editar, eliminar }) => {

    let f = new Date();
    let fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()


    return (
        <div>
            <h1>Mi Día</h1>
            <p>{fecha}</p>
            <ul>
                {listaTareas.map((item) => (
                    <li key={item.id}>{item.text}  <button onClick={() => editar(item.id)}>editar</button> <button onClick={() => eliminar(item.id)}>X</button> </li>
                ))}
            </ul>
        </div>
    );
};

export default Informacion;
