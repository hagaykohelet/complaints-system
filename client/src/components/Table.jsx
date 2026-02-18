import React from 'react'

function Row({category ,message, createdAt}) {
  return (
    <tr>
        <td>{category}</td>
        <td>{message}</td>
        <td>{createdAt}</td>
    </tr>
  )
}

export default Row