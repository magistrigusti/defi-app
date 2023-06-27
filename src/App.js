import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';


function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JavaScript', body: 'Description'},
  {id: 2, title: 'React', body: 'Description'},
  {id: 3, title: 'Redux', body: 'Description'},
]);
const [post, setPost] = useState({title: '', body: ''});
const [body, setBody] = useState('Krasava');

const addNewPost = (event) => {
  event.preventDefault();
  setPosts([...posts, {...post, id: Date.now()}]);
  setPost(''); 
}
  
  return (
    <div className="App">
      <PostForm />

      <PostList posts={posts} title={'Post List for JS'} />
    </div>
  );
}

export default App;
