import React, {useState} from 'react';

const Tareas = () => {

const [tarea,setTarea] = useState("");
const [list, setList] = useState([]);

const crearTarea = (e) => {
    e.preventDefault(); //prevent a browser reload/refresh

    if(tarea === '') return; 

    const newList = { text: tarea,completed: false} 
    setList([...list, newList]); //a mi lista hago el push del newlist

    setTarea(""); //vacio

}

const checked = (index) => {
    
    const obj = {...list[index]};

    obj.completed = !obj.completed; //F a T y viceversa

    setList([...list.slice(0, index), obj].concat(list.slice(index + 1)));//izq,centro,derecho

}


const eliminar = (index) => {
setList(list.filter((_item, i) => i !== index)); 
}


return(
    <div>
        <h2>Lista de quehaceres</h2>
        <br/>
        {list.map((item, i) => (
            <div key={i}>
            <span style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
            <input
                className='checkbox'
                type="checkbox"
                checked={item.completed}
                onClick={() => checked(i)}
                readOnly
            />
            <button className="btn btn-warning" onClick={() => eliminar(i)}>Delete</button>
            </div>
        ))}
        <br/>

        <form onSubmit={crearTarea}>
                <label>Ingresar tarea</label>
                <input className="form-control" onChange={ (e)=> setTarea(e.target.value) } value={tarea}/>
                <button className="btn btn-success">Add</button> 
        </form>
    </div>


)
}

export default Tareas;
