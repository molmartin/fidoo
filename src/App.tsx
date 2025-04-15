import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  const [email, setEmail] = useState('')

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage setEmail={setEmail} />} />
        <Route
          path="/dashboard"
          element={<DashboardPage email={email} setEmail={setEmail} />}
        />
      </Routes>
    </HashRouter>
  )
}

export default App
