import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import LoginRoute from './components/LoginRoute'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<LoginRoute />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/welcome" element={<WelcomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
