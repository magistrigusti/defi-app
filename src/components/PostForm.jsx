import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {...post, id: Date.now()};
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <form>
      <MyInput onChange={event => setPost({...post, title: event.target.value})} value={post.title} />

      <MyInput onChange={event => setPost({...post, body: event.target.value})} value={post.body} />

      <MyButton onClick={addNewPost} >Add Post</MyButton>
    </form>
  );
}

export default PostForm;