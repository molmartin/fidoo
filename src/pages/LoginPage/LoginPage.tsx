import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material'
import useLogin from './hooks/useLogin'

interface LoginPageProps {
  setEmail: (email: string) => void
}

function LoginPage(props: LoginPageProps) {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const { mutate: login, isError, error, isPending } = useLogin()

  function handleLogin(): void {
    login(username, {
      onSuccess: (response) => {
        if (!response.error) {
          props.setEmail(response.data)
          navigate('/dashboard')
        }
      },
    })
  }

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
    </Container>
  )
}

export default LoginPage
