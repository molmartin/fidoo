import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<WelcomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
