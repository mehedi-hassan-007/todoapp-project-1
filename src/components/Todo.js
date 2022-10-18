import React from 'react';

import style from './Todo.module.css';

const Todo = (props) => {
    const{title, desc}= props.todo;
    const{id}=props;

    const handleClick=(id)=>{
        props.onRemoveTodo(id)
    }
    return (
        <article key={props.id} className={style.todo}>
        <div>
            <h1>{title}</h1>
            <h3>{desc}</h3>
        </div>
        <div>
            <button className={style.btn} onClick={()=>{handleClick(id);}}>
                <i class="fa-solid fa-trash 2x"></i>
            </button>
        </div>
        </article>
    );
};

export default Todo;