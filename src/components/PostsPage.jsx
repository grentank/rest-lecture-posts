import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllPosts from './AllPosts';
import NewPostForm from './NewPostForm';

export default function PostsPage({ authUser }) {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios.get('/api/v1/posts')
      .then((res) => setPosts(res.data));
  }, []);
  const submitHandler = (e, input) => {
    e.preventDefault();
    axios.post('/api/v1/posts', { ...input, ...authUser })
      .then((res) => setPosts(res.data));
  };
  return (
    <div className="col">
      <div className="row">
        <NewPostForm submitHandler1={submitHandler} />
        <AllPosts authUser={authUser} posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}
