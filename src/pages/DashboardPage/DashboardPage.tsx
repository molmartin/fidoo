import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'

interface DashboardProps {
  email: string
  setEmail: (email: string) => void
}

function Dashboard({ email, setEmail }: DashboardProps) {
  const navigate = useNavigate()

  function handleLogout(): void {
    setEmail('')
    navigate('/')
  }

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100vh"
        gap={2}
        alignItems="center"
      >
        <Typography variant="h5">Welcome</Typography>
        <Button href={`mailto:${email}`} variant="outlined">
          {email}
        </Button>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  )
}

export default Dashboard
