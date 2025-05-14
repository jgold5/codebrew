import { useState, useEffect } from 'react'
import './App.css'
import api from './services/api';
import { Post } from './components/Post';

interface Post {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Justin');

  const submitPost = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/posts', { title, content });
      setPosts(prev => [...prev, res.data]);
    } catch (err) {
      console.error('Failed to create post', err);
    }
  };

  useEffect(() => {
    api.get('/posts').then(res => {
      setPosts(res.data);
    });
  }, [])

  return (
    <>
    <div>
      <h1>Codebrew</h1>
      <form onSubmit={submitPost}
            className='bg-gray-800 rounded-2xl shadow-md p-6 space-y-4 max-w-2x1 mx-auto mb-8'
      >
        <h2 className='text-2x1 font-semibold text-white'>Create a post</h2>
        <div>
          <label className='block text-sm font-medium text-gray-400 mb-1'>Title</label>
        <input
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
          required
        />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-400 mb-1'>Content</label>
          <textarea
            placeholder='Content'
            value={content}
            onChange={e => setContent(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <button type='submit'>Create Post</button>
      </form>

      <div className="grid gap-6 p-6 bg-gray-800 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <Post title={post.title} content={post.content} author='Justin'/>
      ))}
      </div>
      </div>
    </>
  )
}

export default App;
