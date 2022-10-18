import React,{ useState } from 'react';
import Todos from './Todos';
import style from './Home.module.css';
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';

const dummytodos =[
//     {
//         id: 1,
//         title: 'alerm 1',
//         desc: 'alerm is on'
//     },
//     {
//         id: 2,
//         title: 'alerm 2',
//         desc: 'alerm is on'
//     }
]
const Home = () => {
    const[todos, setTodos]= useState([])

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
          return [...prevTodos, { id: uuidv4(), todo }];
        });
      };

      const onHandleRemove=(id)=>{
       setTodos((prevTodos)=>{
       const filteredTodos = prevTodos.filter((todo)=>todo.id != id);
       return filteredTodos;
       });}
    
    return (
        <div className={style.container}>
            <h1 style={{color: "white"}}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo}/>
            <Todos todos={todos} onRemoveTodo={onHandleRemove} />
        </div>
    );
};

export default Home;