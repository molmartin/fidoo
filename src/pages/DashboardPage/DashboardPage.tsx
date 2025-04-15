import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import useLoginSession from '../../hooks/useLoginSession'

function Dashboard() {
  const navigate = useNavigate()
  const { removeSession } = useLoginSession()

  const email = localStorage.getItem('email')

  function handleLogout() {
    removeSession()
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
