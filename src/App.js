import React, { useState, useRef } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';


function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JavaScript', body: 'Description'},
  {id: 2, title: 'React', body: 'Description'},
  {id: 3, title: 'Redux', body: 'Description'},
]);
const [title, setTitle] = useState('Kniaz');
const [body, setBody] = useState('Krasava');

const addNewPost = (event) => {
  event.preventDefault();
}
  
  return (
    <div className="App">
      <form>
        <MyInput onChange={event => setTitle(event.target.value)} value={title} />

        <MyInput onChange={event => setBody(event.target.value)} value={body} />
        
        <MyButton onClick={addNewPost}>Add Post</MyButton>
      </form>
      
      <PostList posts={posts} title={'Post List for JS'} />
    </div>
  );
}

export default App;
