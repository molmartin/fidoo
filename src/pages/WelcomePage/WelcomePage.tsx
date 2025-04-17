import { useNavigate } from 'react-router-dom'
import { Box, Link, Container, Typography, Fade } from '@mui/material'
import { useEffect, useState } from 'react'
import useLoginSession from '../../hooks/useLoginSession'

function WelcomePage() {
  const email = localStorage.getItem('email')
  const [showBridge, setShowBridge] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  const { removeSession } = useLoginSession()
  const navigate = useNavigate()

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

  function handleLogout() {
    removeSession()
    navigate('/', { state: { fromProtected: true } })
  }

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
          <br />
          <Fade in={showSecond} timeout={2000}>
            <span>Do you want to </span>
          </Fade>
          <Fade in={showLogout} timeout={2000}>
            <span>
              <span>
                <Link
                  component="button"
                  onClick={handleLogout}
                  underline="always"
                  sx={{ color: 'primary.main', cursor: 'pointer' }}
                >
                  logout
                </Link>
                ?
              </span>
            </span>
          </Fade>
        </Typography>
      </Box>
    </Container>
  )
}

export default WelcomePage
