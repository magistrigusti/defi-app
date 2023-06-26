import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'description'}
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <form>
        <MyInput onChange={event => setTitle(event.target.value)} value={title} />

        <MyInput onChange={event => setBody(event.target.value)} value={body} />
      </form>

      <PostList posts={posts} title={'Post List for JS'} />
    </div>
  )
}

export default App;