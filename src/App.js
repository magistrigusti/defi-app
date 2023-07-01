import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import './styles/App.css';


function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JavaScript', body: 'description'},
  {id: 2, title: 'React', body: 'scription'},
  {id: 3, title: 'Redux', body: 'inscription'},
]);
const [filter, setFilter] = useState({sort: '', query: ''});

const sortedPosts = useMemo(() => {
  if (filter.sort) {
    return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
  }
  return posts;
}, [filter.sort, posts]); 

const sortedAndSearchedPosts = useMemo( () => {
  return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
}, [filter.query, sortedPosts]);

const createPost = (newPost) => {
  setPosts([...posts, newPost]);
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id));
}


  
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        sortedAndSearchedPosts.length !==0
          ? 
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List for JS'} />
          : 
            <h1 style={{textAlign: 'center'}}>Posts not fuind</h1>
      }
      
    </div>
  );
}

export default App;
