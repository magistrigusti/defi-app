import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'description'}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostList remove={removePost} posts={posts} title={'pst'} />
    </div>
  )

}

export default App;