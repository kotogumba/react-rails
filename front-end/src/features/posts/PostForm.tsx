import React from 'react'

function PostForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, body } = e.target.elements
    const post = {
      title: title.value,
      body: body.value
    }
    props.addPost(post)
  }


  return (
    <div>
      {/* form for text and title */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="body" placeholder="Body" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default PostForm
