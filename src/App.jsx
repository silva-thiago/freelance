import React from 'react'

import Login from './pages/auth/Login'

const App = ({ children }) => {
  return (
    <div>
      <main>
        <Login>
          {children}
        </Login>
      </main>
    </div>
  )
}

export default App
