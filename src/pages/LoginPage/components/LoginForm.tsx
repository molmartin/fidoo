import { useState } from 'react'
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import useLogin from '../hooks/useLogin'
import useLoginSession from '../../../hooks/useLoginSession'

type LoginFormProps = {
  onLoginSuccess: () => void
}
const MAX_USERNAME_LENGTH = 15
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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue: string = event.target.value
    if (newValue.length <= MAX_USERNAME_LENGTH) {
      if (isError) reset()
      setUsername(newValue)
    }
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
            maxLength: MAX_USERNAME_LENGTH,
          },
        }}
        value={username}
        error={isError}
        helperText={
          isError && error instanceof Error
            ? error.message
            : `${MAX_USERNAME_LENGTH - username.length} characters remaining`
        }
        onChange={handleChange}
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
