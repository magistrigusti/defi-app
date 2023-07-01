import React, { useState, useMemo } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';


function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JavaScript', body: 'description'},
  {id: 2, title: 'React', body: 'scription'},
  {id: 3, title: 'Redux', body: 'inscription'},
]);
const [selectedSort, setSelectedSort] = useState('');
const [searchQuery, setSearchQuery] = useState('');

function getSortedPosts() {
  console.log('ok')
  if (selectedSort) {
    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
  }
  return posts;
}

const sortedPosts = getSortedPosts(); 

const createPost = (newPost) => {
  setPosts([...posts, newPost]);
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id));
}

const sortPosts = (sort) => {
  setSelectedSort(sort);
}
  
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}} />
      <div>
        <MyInput value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
            placeholder='search...'
        />

        <MySelect value={selectedSort}
            onChange={sortPosts}
            defaultValue="sorting" 
            options={[
              {value: 'title', name: 'For name'},
              {value: 'body', name: 'For descriptions'}
            ]}
        />
      </div>

      {
        posts.length !==0
          ? 
            <PostList remove={removePost} posts={sortedPosts} title={'Post List for JS'} />
          : 
            <h1 style={{textAlign: 'center'}}>Posts not fuind</h1>
      }
      
    </div>
  );
}

export default App;
