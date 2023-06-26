import React, { useState } from 'react';
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
const [post, setPost] = useState({title: '', body: ''});
const [body, setBody] = useState('Krasava');

const addNewPost = (event) => {
  event.preventDefault();

  const newPost = {
    id: Date.now(),
    post,
    body
  }
  
  setPosts([...posts, newPost]);
  setPost('');
  setBody(''); 
}
  
  return (
    <div className="App">
      <form>
        <MyInput onChange={event => setPost({...post, title: event.target.value})} value={post.title} />

        <MyInput onChange={event => setPost({...post, body: event.target.value})} value={post.body} />
        
        <MyButton onClick={addNewPost}>Add Post</MyButton>
      </form>

      <PostList posts={posts} title={'Post List for JS'} />
    </div>
  );
}

export default App;
