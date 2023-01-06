import React from 'react'

function Post(props) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => {
    props.deletePost(props.post.id)
  }

  const showForm = () => {
    setShow(show => !show)
  }


  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <button onClick={handleClick}>Delete</button>
      <button onClick={showForm}>Edit</button>
      {show &&
      (<form onSubmit={(e) => {
        e.preventDefault()
        const { title, body } = e.target.elements
        const post = {
          id: props.post.id,
          title: title.value,
          body: body.value
        }
        props.updatePost(post)
      }}>
        <input type="text" name="title" placeholder={props.post.title} />
        <input type="text" name="body" placeholder={props.post.body} />
        <input type="submit" value="Submit" />
      </form> )}
    </div>
  )
}

export default Post
