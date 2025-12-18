import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentCreate from '../comments/CommentCreate';
import CommentList from '../comments/CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const apiResponse = await axios.get('http://localhost:4002/posts');

      console.log(apiResponse.data);
      setPosts(apiResponse.data);
    };

    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => (
    <div
      className="card"
      style={{ width: '30%', marginBottom: '20px' }}
      key={post.id}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
        
        <CommentList postComments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
