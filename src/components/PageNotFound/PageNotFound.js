import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.scss"

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:
        <Link to='/'> Home</Link>
      </p>
    </div>
  )
}

export default PageNotFound