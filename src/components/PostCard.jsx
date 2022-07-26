import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post, setPosts, authUser }) {
  const deleteHandler = (id) => {
    // setPosts((prev) => prev.filter((onePost) => onePost.id !== id));
    axios.delete(`/api/v1/posts/${id}`)
      .then((res) => setPosts(res.data));
  };

  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <p className="card-text" style={{ fontSize: '10px' }}>{post.User.username}</p>
        <div className="col">
          {authUser.username === post.User.username // Если авторизованный пользователь -- автор, то показать кнопки
            ? (
              <>
                <Link to={`/posts/${post.id}`} state={{ post }} className="btn btn-primary">Edit</Link>
                <button
                  type="button"
                  onClick={() => deleteHandler(post.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </>
            )
            : 'Not the author'}

        </div>
      </div>
    </div>
  );
}
