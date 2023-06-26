import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/Buttonn/MuInput';

const PostForm = () => {
  const [post, setPost] = useState({title: '', body: ''});
  return (
    <form>
      <MyInput onChange={event => setPost({...post, title: event.target.value})} value={post.title} />

      <MyInput onChange={event => setPost({...post, body: event.target.value})} value={post.body} />

      <MyButton onClick={addNewPost}>Add Post</MyButton>
    </form>
  );
}

export default PostForm;