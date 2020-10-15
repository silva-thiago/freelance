import React from 'react'

import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import AccountStack from './pages/auth/AccountStack'

const App = () => {
  return (
    <div>
      <main>
        <Login />
        <AccountStack />
        <ForgotPassword />
      </main>
    </div>
  )
}

export default App
