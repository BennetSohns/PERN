import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Post {
  caption: string;
  location: string;
}

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('http://localhost:3000/').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const refreshPosts = () => {
    axios.get<Post[]>('http://localhost:3000/').then((response) => {
      setPosts(response.data);
    });
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refreshPosts}>Refresh</button>
      <ul>
        {posts.map((post) => (
          <li key={post.caption}>
            <h2>{post.caption}</h2>
            <p>{post.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;