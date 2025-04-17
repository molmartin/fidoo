import { useState } from 'react'
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import useLogin from '../hooks/useLogin'
import useLoginSession from '../../../hooks/useLoginSession'

type LoginFormProps = {
  onLoginSuccess: () => void
}

function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const { mutate: login, isError, error, isPending } = useLogin()
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

  return (
    <Box
      component="form"
      autoComplete="off"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100dvh"
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
        sx={{ height: '56px' }}
        disabled={isPending || username.trim() === ''}
      >
        {isPending ? <CircularProgress size={24} color="inherit" /> : 'Login'}
      </Button>
    </Box>
  )
}

export default LoginForm
