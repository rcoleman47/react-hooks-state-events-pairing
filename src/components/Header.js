import React from 'react'


function Header({
  showComments,
  title, 
  views, 
  createdAt,
  upvotes, 
  downvotes, 
  onHandleShowComments}) {

  const handleDownVote = () => {
    const plusVote = downvotes++
   
  }

  const handleUpVote = () => {
    const plusVote = upvotes++
    return plusVote
  }

  const handleOnCommentsClick = () => {
    onHandleShowComments()
  }
  
  return (
    <div>
      <h1>{title}</h1>
      <h3>{`${views} Views | Uploaded ${createdAt}`}</h3>
      <div>
        <button onClick={handleUpVote} className='up'>{handleUpVote()} 👍</button>
        <button onClick={handleDownVote} className='down'>{downvotes} 👎</button>
      </div>
      <button onClick={handleOnCommentsClick} >{showComments ? `Hide Comments` : "Show Comments"}</button>
    </div>
  )
}

export default Header