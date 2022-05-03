import React from 'react'
import Comment from './Comment'

function CommentList({comments, id}) {
  console.log(comments.length)

 
  return (
    <>
    <h1>{`${comments.length} Comments`}</h1>
    {comments.map(comment => <Comment key={id} {...comment}/>)}
    </>
  )
}

export default CommentList    