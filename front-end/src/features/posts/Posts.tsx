import React from 'react'
import Post from './Post'
import PostForm from './PostForm'

const API_URL = 'http://localhost:3000'
function Posts() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    fetch('http:///localhost:3000/posts.json')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }

  const addPost = async (post) => {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await response.json()
    console.log(data)
    setPosts(posts => [...posts, data])
    console.log(posts)
  }
  const updatePost = async (post) => {
    const response = await fetch(`${API_URL}/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await response.json()
    console.log(data)
    const newPosts = posts.map((p) => p.id === post.id ? data : p)
    setPosts(newPosts)
  }
  
  const deletePost = async (id) => {
    await fetch(`${API_URL}/posts/${id}`, {
      method: 'DELETE'
    })
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  const postElements = posts.map((post) => (
    <Post key={post.id} post={post} deletePost={deletePost} updatePost={updatePost}/>
  ))

  return (
    <div>
      {postElements}
      <PostForm addPost={addPost} />
    </div>
  )
}

export default Posts
