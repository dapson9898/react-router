import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div>
      <ul>
        <Link to='/' >home</Link>
        <Link to='/dashboard' >dashboard</Link>
        <Link to='/navpage' >Nav</Link>
      </ul>
    </div>
  )
}

export default Test
