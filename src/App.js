import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase.js'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { Button, Container, ListItem, ListItemText, TextField, Typography } from '@mui/material';

function App() {
  const [newTodo, setNewTodo] = useState('')

  const [todos, setTodos] = useState([]);
  const todoCollectionRef = collection(db, 'todos')

  const createTodo = async () => {
    await addDoc(todoCollectionRef, {todo: newTodo});
  };

  useEffect(()=>{
    const getTodos = async() => {
      const data = await getDocs(todoCollectionRef);
      // console.log(data);
      setTodos(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }

    getTodos()
  },[])

  return (
    <div className="App">
      <Container sx={{ boxShadow: 1, p:3, mt:2, borderRadius: 2, backgroundColor:'#FFF'}}
      style={{display: 'flex', flexDirection: 'column'}}
      maxWidth='sm'>
        <Typography variant='h4'>
          TODO LIST
        </Typography>
        <TextField label='Add Todo' onChange={(e)=> {setNewTodo(e.target.value)}} sx={{mt:1}}/>
        <Button onClick={createTodo} variant='contained' sx={{mt:1}}>Create Todo</Button>
        
        {todos.map((todo)=>
          {return <ListItem key={todo.id} sx={{mt:2, boxShadow: 3, borderRadius:2}}>
            <ListItemText primary={todo.todo} />
            
          </ListItem>;
        })}
      </Container>
    </div>
  );
}

export default App;
