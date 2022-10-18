import React,{ useState } from 'react';
import style from './NewTodo.module.css';

const NewTodo = (props) => {
    const [todo, setTodo] = useState({ title: "", desc: ""})

const {title, desc}= todo;
    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((prevTodo) => {
        return {...prevTodo, [name]:event.target.value}
    })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo)
        setTodo({title: "", desc: ""});
    }
    return (
       <form className={style["form-field"]} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
            <label className={style["formGroup-label"]} htmlFor="title">Title:</label>
            <input className={style["formGroup-inputtitle"]} type="text" name="title" id="title" value={title} onChange={handleChange} />
        </div>
        <div className={style.formGroup}>
            <label className={style["formGroup-label"]} htmlFor="desc">Description:</label>
            <input className={style["formGroup-textinput"]} type="text" name="desc" id="desc" value={desc} onChange={handleChange} />
        </div>
        <div>
            <button className={style.button} type="submit">Add Todo</button>
        </div>
       </form>
    );
    }

export default NewTodo;