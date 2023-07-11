import React, { useState, useEffect } from 'react';
import PostServise from './API/PostServise';
import {usePosts} from './components/hooks/usePosts';
import {useFetching} from './components/hooks/useFetching'
import {getPageCount, getPagesArray} from './utils/page';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter'; 
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import './styles/App.css';


function App() {
const [posts, setPosts] = useState([]);
const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState('false');
const [totalPages, setTotalPages] = useState(10);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);
let pagesArray = getPagesArray(totalPages);
console.log(pagesArray)

const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
  const response = await PostServise.getAll(limit, page);
  setPosts(response.data);
  const totalCount = response.headers['x-total-count'];

  setTotalPages(getPageCount(totalCount, limit));
});

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

useEffect(() => {
  fetchPosts();
}, [])

const createPost = (newPost) => {
  setPosts([...posts, newPost]);
  setModal('false');
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
      {
        postError && <h1>An error has error ${postError}</h1>
      }
      {
        isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Post List for JS'} />
      }
      <div className='page__wrapper'>
        {pagesArray.map(page =>
          <span className="page">{page}</span>
        )}
      </div>
    </div>
  );
}

export default App;
