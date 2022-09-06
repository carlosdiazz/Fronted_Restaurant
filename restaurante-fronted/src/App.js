import React from 'react'
import {Navigation} from "./routes"
import {ClientLayout} from "./layouts"

export default function App() {
  return (
    <ClientLayout className='app'>
      <h1 className='app_title'>Restaurant</h1>
      <Navigation />
    </ClientLayout>
  )
}
