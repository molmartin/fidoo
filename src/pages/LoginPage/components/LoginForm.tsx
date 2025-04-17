import { useState } from 'react'
import { Box, Button, CircularProgress } from '@mui/material'
import useLogin from '../hooks/useLogin'
import useLoginSession from '../../../hooks/useLoginSession'
import UsernameInput from './UsernameInput'

type LoginFormProps = {
  onLoginSuccess: () => void
}

function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const { mutate: login, reset, isError, error, isPending } = useLogin()
  const { setSession } = useLoginSession()

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    login(username, {
      onSuccess: (response) => {
        if (!response.error) {
          setSession(response.data)
          onLoginSuccess()
        }
      },
    })
  }

  function handleChange(newValue: string) {
    setUsername(newValue)
    reset()
  }

  const errorMessage = isError && error instanceof Error ? error.message : ''

  return (
    <Box
      component="form"
      autoComplete="off"
      display="flex"
      flexDirection="column"
      gap={2}
      flex={1}
      onSubmit={handleLogin}
    >
      <UsernameInput
        value={username}
        onChange={handleChange}
        errorMessage={errorMessage}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ height: '56px' }}
        disabled={isPending || username.trim() === ''}
      >
        {isPending ? <CircularProgress size={24} color="inherit" /> : 'Login'}
      </Button>
    </Box>
  )
}

export default LoginForm
