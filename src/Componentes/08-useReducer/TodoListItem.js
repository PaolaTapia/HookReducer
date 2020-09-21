import React from 'react'; 

export const TodoListItem = ({toDos, handleDelete, handleToggle}) => {
     
     return (
          <>
          {toDos.map((toDo, i) => (
          <li key={toDo.id} className="list-group-item">
               <p 
                    className={`${toDo.done && 'complete'}`}
                    onClick={ ()=>handleToggle (toDo.id)}
               >{i + 1}.{toDo.desc}</p>
               <button 
               onClick={()=>handleDelete(toDo.id)}
               className="btn btn-danger"
               >Borrar</button>
          </li>
          ))}
          </>
     )
}
