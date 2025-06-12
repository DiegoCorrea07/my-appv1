import './styles.css';
import React, { useState, useEffect } from 'react';

export function TooloList() { 
    const[tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState('');

    const agregarTarea = () => {
        if (tarea.trim() !== '') {
            setTareas([...tareas, tarea]);
            setTarea('');
        }
    }

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    }

    const editarTarea = (index) => {
        setTarea(tareas[index]);
        eliminarTarea(index);
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input 
                type="text" 
                value={tarea} 
                onChange={(e) => setTarea(e.target.value)} 
                placeholder="Nueva tarea" 
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((t, index) => (
                    <li key={index}>
                        {t}
                        
                        <button onClick={() => editarTarea(index)} class="btn-edit">Editar</button>

                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
