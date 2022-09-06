import React from 'react'
import {Routes, Route} from 'react-router-dom'

export function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<div>Home</div>} />
    </Routes>
  )
}
