import React, {useState} from 'react';
import PostList from './components/PostList';
import PostForm from './component/PostForm';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'description'},
  {id: 2, title: 'React', body: 'scription'},
  {id: 3, title: 'Redux', body: 'inscription'},
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}} />

      <div>
        <mySelect value={selectedSort} 
            onChange={sortPosts}
            defaultValue="sorting"
            
        />
      </div>
    </div>
  )
}

export default App;