import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import axios from "axios";
import { WP_API_BASE_URL, WP_BLOG_CATEGORY_ID, WP_COMMON_LIMIT } from '@/settings/wordPress';
import CardWithoutImage from '@/components/CardWithoutImage';

const Blog = () => {
  const [posts, setPosts] = useState([])
  
  const fetchBlogPosts = () => {
  axios
    .get(`${WP_API_BASE_URL}/wp-json/wp/v2/posts?categories=${WP_BLOG_CATEGORY_ID}&per_page=${WP_COMMON_LIMIT}`)
    .then((res) => {
      // Saving the data to state
      console.log(res.data)
      setPosts(res.data);
    });
}

useEffect(() => {
  fetchBlogPosts()
}, [])
  
    return (
      <Layout >
        <div className="Blog">
          <h1>Blog</h1>
          {posts.map((post) => (
            <div key={post.id}>
              <CardWithoutImage post={post} />
            </div>
          ))}
        </div>
      </Layout>
    );
};
  
export default Blog;