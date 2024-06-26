import { useState } from 'react'

function PostForm({ addPost }) {
  const [content, setContent] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!content) return
    addPost('New Title', content) // Assuming 'New Title' is the title of the post
    setContent('')
  };

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
