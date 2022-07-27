import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

export default function AllPosts({ authUser, posts, setPosts }) {
  return (
    <div>
      {posts
        ? posts.map((post) => (
          <PostCard
            authUser={authUser}
            post={post}
            setPosts={setPosts}
            key={post.id}
          />
        ))
        : 'loading...'}

    </div>
  );
}
