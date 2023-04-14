import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/inputFeild';
import PostList from './components/PostList';
import MyForm from './components/form';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  
  return (
    <div className="App">
      <span className="heading"/>
      <PostList />
      <MyForm/>
    </div>
  );
}

export default App 

