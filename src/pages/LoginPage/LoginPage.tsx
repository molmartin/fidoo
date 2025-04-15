import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Snackbar,
} from '@mui/material'
import useLogin from './hooks/useLogin'
import useLoginSession from '../../hooks/useLoginSession'

function LoginPage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const { mutate: login, isError, error, isPending } = useLogin()
  const { setSession } = useLoginSession()

  const location = useLocation()
  const wasKicked = location.state?.fromProtected === true

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  function handleClose(): void {
    setSnackbarOpen(false)
  }

  function handleLogin(): void {
    login(username, {
      onSuccess: (response) => {
        if (!response.error) {
          setSession(response.data)
          navigate('/dashboard')
        }
      },
    })
  }

  useEffect(() => {
    if (wasKicked) {
      setSnackbarOpen(true)
    }
  }, [wasKicked])

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100vh"
        gap={2}
      >
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={function (e) {
            setUsername(e.target.value)
          }}
        />
        {isError && (
          <Alert severity="error">
            {error instanceof Error ? error.message : 'Došlo k chybě'}
          </Alert>
        )}
        <Button
          variant="contained"
          onClick={handleLogin}
          disabled={isPending || username.trim() === ''}
        >
          {isPending ? <CircularProgress size={24} color="inherit" /> : 'Login'}
        </Button>
      </Box>
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
