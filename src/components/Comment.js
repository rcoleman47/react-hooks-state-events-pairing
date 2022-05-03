import React from 'react'

function Comment({comment, user}) {
  return (
    <div>
      <h2>{user}</h2>
      <h4>{comment}</h4>
    </div>
  )
}

export default Comment