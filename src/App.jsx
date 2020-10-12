import React from 'react'

import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'

const App = ({ children }) => {
  return (
    <div>
      <main>
        <Login>
          {children}
        </Login>
        <ForgotPassword>
          {children}
        </ForgotPassword>
      </main>
    </div>
  )
}

export default App
