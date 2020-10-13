import React from 'react'

import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import AccountStack from './pages/auth/AccountStack'

const App = () => {
  return (
    <div>
      <main>
        <Login />
        <ForgotPassword />
        <AccountStack />
      </main>
    </div>
  )
}

export default App
