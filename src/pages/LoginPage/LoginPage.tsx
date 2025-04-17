import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Snackbar } from '@mui/material'
import LoginForm from './components/LoginForm'

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const wasKicked = location.state?.fromProtected === true

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  useEffect(() => {
    if (wasKicked) {
      setSnackbarOpen(true)
      navigate(location.pathname, { replace: true })
    }
  }, [wasKicked, location.pathname, navigate])

  function handleClose(): void {
    setSnackbarOpen(false)
  }

  return (
    <Container maxWidth="sm">
      <LoginForm onLoginSuccess={() => navigate('/welcome')} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="You have been logged out"
      />
    </Container>
  )
}

export default LoginPage
