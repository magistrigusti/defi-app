import React, { useState, useEffect} from 'react';
import PostServise from '../../API/PostServise';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../../utils/page';
import PostList from '../PostList';
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/button/MyButton';
import Loader from '../UI/Loader/Loader';
import Pagination from '../UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState('false');
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);

    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal('false');
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className='posts'>
      <button>Get Post</button>

      <MyButton style={{marginTop: '30px'}}
          onClick={() => setModal('true')}
      >Add User
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{margin: '15px'}} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1>An has error ${postError}</h1>}

      {isPostsLoading
        ? 
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Loader />
        </div>
        :
        <PostList remove={removePost} 
            posts={sortedAndSearchedPosts}
            title={'Pst List for JS'}
        />
      }

      <Pagination page={page} 
          changePage={changePage} 
          totalPages={totalPages}
      />
    </div>
  )
}

export default Posts;