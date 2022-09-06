
import React from 'react'

export default function ClientLayout(props) {
  const {children } = props

  return (
    <div>
      <p>ClientLayout</p>
      {children}
    </div>
  )
}
