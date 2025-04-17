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
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { version } from '../package.json'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
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
        </Box>
        <Box component="footer" paddingY={2}>
          <Typography variant="body2" color="textSecondary" align="center">
            Version: {version}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
