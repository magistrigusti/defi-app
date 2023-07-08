import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';
import '../styles/App.css';

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>Posts not fuind</h1>
    )
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>

      <TransitionGroup>

        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            className="post"
          >
            <PostItem remove={remove} key={post.id} post={post} number={index + 1}/>
          </CSSTransition>
        )}

      </TransitionGroup>

    </div>
  );
}

export default PostList;