import "../css/info.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

const Informacion = ({ listaTareas, editar, eliminar }) => {

    let f = new Date();
    let fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()


    return (
        <div>
            <h1 className="h1">Mi Día</h1>
            <p className="fecha">{fecha}</p>
            <ul >
                {listaTareas.map((item) => (
                    <li className="liTareas" key={item.id}> <div>  <button className="btnEnd" onClick={() => eliminar(item.id)}><i className="bi bi-x-circle-fill"></i></button> <button className="btnEdid" onClick={() => editar(item.id)}><i className="bi bi-pencil-square"></i></button></div>
                       <p>{item.text} </p>  </li>
                ))}
            </ul>
        </div>
    );
};

export default Informacion;
