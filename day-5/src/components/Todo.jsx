import React, { useState } from 'react'

const Todo = () => {
    const [newTodo, setNewTodo] = useState('');
    const [items, setItems] = useState([]);
    function demo(e) {
        setNewTodo(e.target.value)
    }
    function handleadd() {

        setItems((prev) => {
            let new_item = [...prev, newTodo];
            return new_item;

        });
        setNewTodo('');
        document.getElementById('new_todo').value='';
    }

    return (
        <div>
            <input
                type="text"
                id='new_todo'
                onChange={demo} />
            {/* <p>{newTodo}</p> */}
            <button onClick={handleadd}>Add</button>


            {items.map((item, index) => (
                <p key={index}>{item} {index}</p>
            )
            )}

        </div>
    )
}

export default Todo
