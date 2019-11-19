import React from 'react'

import Lazy from '@/components/Lazy'

const Home = Lazy(() => import('@/pages/Home'))

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
