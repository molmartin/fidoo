import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Layout from './components/Layout'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
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
      </Layout>
    </ThemeProvider>
  )
}

export default App
