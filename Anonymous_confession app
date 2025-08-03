// 📁 /pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('confessions')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });
    if (!error) setPosts(data);
  };

  const likePost = async (id, currentLikes) => {
    await supabase
      .from('confessions')
      .update({ likes: currentLikes + 1 })
      .eq('id', id);
    fetchPosts();
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Laikipia Unisilent 🔞</h1>
      <a href="/submit" className="block text-center text-blue-600 underline mb-4">Submit Your Confession</a>
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-xl shadow p-4 mb-4">
          <p>{post.message}</p>
          <button
            onClick={() => likePost(post.id, post.likes || 0)}
            className="text-sm mt-2 text-blue-500 hover:underline"
          >
            ❤️ {post.likes || 0} Like
          </button>
        </div>
      ))}
    </div>
  );
}
