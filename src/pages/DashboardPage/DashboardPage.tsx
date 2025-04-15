import { Link as RouterLink } from 'react-router-dom'
import { Box, Link, Container, Typography, Fade } from '@mui/material'
import { useEffect, useState } from 'react'
function Dashboard() {
  const email = localStorage.getItem('email')
  const [showBridge, setShowBridge] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  //TODO refactor
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowBridge(true)
      const timeout = setTimeout(() => {
        setShowSecond(true)
        const timeout = setTimeout(() => {
          setShowLogout(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }, 2000)
      return () => clearTimeout(timeout)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100vh"
        gap={2}
        alignItems="center"
      >
        <Typography variant="h5">
          Welcome <Link href={`mailto:${email}`}>{email}</Link>
          <Fade in={showBridge} timeout={2000}>
            <span>, you are logged in.</span>
          </Fade>
          <Fade in={showSecond} timeout={2000}>
            <span>
              <br />
              Do you want to{' '}
            </span>
          </Fade>
          <Fade in={showLogout} timeout={2000}>
            <span>
              <RouterLink to="/">logout</RouterLink>?
            </span>
          </Fade>
        </Typography>
      </Box>
    </Container>
  )
}

export default Dashboard
