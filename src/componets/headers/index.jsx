import React from 'react'
import './styles.scss'

function index(props) {
  return (
    <div className='header-contenar'>
      <h1 className='header-contenar__name'>{props.headerName}</h1>
    </div>
  )
}

export default index
