import React, { useState } from 'react';

const TodoItem = () =>{
    const[value,setValue] = useState("");
    const[todos, setTodos] = useState([]);
    const[editIndex,setEditIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value === ""){
            return console.log("add to-do please");
        }
        if(editIndex !== null){
            const updatedArray = [...todos];
            updatedArray[editIndex] = value;
            setTodos(updatedArray);
            setEditIndex(null);
        }
        else{
        const newAdd = [...todos,value];
        setTodos(newAdd);
        console.log(newAdd);
        }
        setValue("");
    }
    const handleDelete = () => {
        const newArray = [...todos];
        newArray.splice(todos.index,1);
        setTodos(newArray);
    }
    const handleEdit = (index) => {
        setValue(todos[index]);
        setEditIndex(index);
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Enter your todo" onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' onClick={handleSubmit}> {editIndex !== null ? "Save Changes" : "Add Todo"}</button>
           </form>
           <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
                </li>
            ))}
           </ul>
        </div>
    )
}

export default TodoItem;