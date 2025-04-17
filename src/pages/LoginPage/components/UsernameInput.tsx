import { TextField } from '@mui/material'

type UsernameInputProps = {
  value: string
  onChange: (newValue: string) => void
  errorMessage: string
}

const MAX_USERNAME_LENGTH = 15

function UsernameInput({ value, onChange, errorMessage }: UsernameInputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    if (newValue.length <= MAX_USERNAME_LENGTH) {
      onChange(newValue)
    }
  }

  const helperText = errorMessage
    ? errorMessage
    : `${MAX_USERNAME_LENGTH - value.length} characters remaining`

  return (
    <TextField
      label="Type your username"
      slotProps={{
        htmlInput: {
          'data-tid': 'input-username',
          maxLength: MAX_USERNAME_LENGTH,
        },
      }}
      value={value}
      error={!!errorMessage}
      helperText={helperText}
      onChange={handleChange}
    />
  )
}

export default UsernameInput
