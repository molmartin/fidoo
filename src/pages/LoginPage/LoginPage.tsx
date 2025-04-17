import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  TextField,
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

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
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
      navigate(location.pathname, { replace: true })
    }
  }, [wasKicked, location.pathname, navigate])

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        autoComplete="off"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100dvh"
        paddingX={6}
        gap={2}
        onSubmit={handleLogin}
      >
        <TextField
          label="Type your username"
          slotProps={{
            htmlInput: {
              'data-tid': 'input-username',
            },
          }}
          value={username}
          error={isError}
          helperText={isError && error instanceof Error ? error.message : ' '}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ height: '50px' }}
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
