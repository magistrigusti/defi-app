import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {usePosts} from './components/hooks/usePosts';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter'; 
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css';


function App() {
const [posts, setPosts] = useState([]);
const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState('false');

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

useEffect(() => {
  fetchPosts();
}, [])

const createPost = (newPost) => {
  setPosts([...posts, newPost]);
  setModal('false');
}

async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  setPosts(response.data);
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id));
}
  
  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POST</button>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal('true')}>
        Add User
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} /> 
      </MyModal>
      
      <hr style={{margin: '15px'}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List for JS'} />
    </div>
  );
}

export default App;
