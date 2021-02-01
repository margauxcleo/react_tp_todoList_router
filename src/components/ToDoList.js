import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Todo = (props) => {
    const [todos, setTodos] = useState([]);
    
    const [input, setInput] = useState("");

    const HandleOnChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (input === "") return;
        const todo = { key: Math.random(), value: input};
        setTodos([...todos, todo]);
        localStorage.setItem(todo.key, todo.value);
        setInput("");
    };

    const handleDelete = (event, key) => {
        event.preventDefault();
        // si le prédicat est respecté, la todo reste dans la liste, sinon elle est supprimé de la liste
        const array = todos.filter((todo) => key !== todo.key);
        setTodos(array);
        localStorage.removeItem(key);
        // array.splice(key, 1); 
    };

    useEffect(() => {
        const values = [];
        // Object.keys permet de récupérer les clés présentes dans localStorage
        const keys = Object.keys(localStorage);
        let index = keys.length;
        // on décremente de 1 à chaque tour
        while (index-- > 0) {
            values.push({
                key: keys[index], 
                value: localStorage.getItem(keys[index])
            });
        }
        setTodos(values);
    }, []);

    return (
        <>
            <br/>
            <h3 align="center">Ma Todo List</h3>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="todo">
                    <Form.Control 
                        value={input} 
                        onChange={HandleOnChange} 
                        type="text" 
                        placeholder="Renseigner un item" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ajouter
                </Button>
            </Form>
            <ListGroup>
                {todos.map((todo) => {
                    return (
                        <Container>
                            <Row>
                                <Col>
                                    <ListGroup.Item key={todo.key}>
                                        {todo.value}
                                    </ListGroup.Item>
                                </Col>
                                <Col>
                                    <Button 
                                    onClick={(event) => handleDelete(event, todo.key)} 
                                    variant="danger" 
                                    type="submit">
                                            Supprimer 
                                    </Button>
                                </Col>
                            </Row>  
                        {/* <Row>
                            <Col>
                                <li key={todo + index} id={input.id}>
                                    {todo.value}
                                </li>
                            </Col>
                            <Col>
                                <Button onClick={(event) => {handleDelete(event, input.id)}} variant="danger" type="submit">
                                    Supprimer 
                                </Button>
                            </Col>
                        </Row> */}
                        </Container>
                    );
                })}
            </ListGroup>
        </>
    );
}

export default Todo;

//Correction du prof

// import de uuidv4 pour obtenir une clé unique 
// import { v4 as uuidv4 } from "uuid";
// import { useEffect, useState } from "react";
// const Todolist = (props) => {
//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState([]); // {key: dbhjbj, name: chaussette}
//   const handleOnChange = (event) => {
//     event.preventDefault();
//     setInput(event.target.value);
//   };
//   const addTodo = (event) => {
//     event.preventDefault();
//     if (input === "") return;
//     const todo = { key: uuidv4(), name: input };
//     setTodos([...todos, todo]);
//     localStorage.setItem(todo.key, todo.name);
//     setInput("");
//   };
//   const deleteTodo = (event, key) => {
//     event.preventDefault();
//     const array = todos.filter((todo) => key !== todo.key);
//     setTodos(array);
//   };
//   return (
//     <>
//       <div>
//         <h1 align="center"> Todo trucs</h1>
//         <form className="align-items-center">
//           <input
//             value={input}
//             type="text"
//             className="form-control mb-2"
//             placeholder="ajouter item"
//             onChange={handleOnChange} // (event) => {...}
//           />
//           <button className="btn btn-primary" onClick={addTodo}>
//             Ajouter tache
//           </button>
//           {todos.map((todo) => {
//             return (
//               <div className="list-group-item mt-3" key={todo.key}>
//                 {todo.name}
//                 <button
//                   onClick={(event) => deleteTodo(event, todo.key)}
//                   className="btn btn-danger ml-5"
//                 >
//                   Supprimer
//                 </button>
//               </div>
//             );
//           })}
//         </form>
//       </div>
//     </>
//   );
// };
// export default Todolist;