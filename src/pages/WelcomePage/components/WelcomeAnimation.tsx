import { useEffect, useState } from 'react'
import { Box, Typography, Link, Fade } from '@mui/material'

type Props = {
  email: string | null
  disableAnimation: boolean
  onLogout: () => void
}

function WelcomeAnimation({ email, disableAnimation, onLogout }: Props) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (disableAnimation) {
      setStep(3)
      return
    }

    const timeouts: NodeJS.Timeout[] = []

    timeouts.push(setTimeout(() => setStep(1), 500))
    timeouts.push(setTimeout(() => setStep(2), 2500))
    timeouts.push(setTimeout(() => setStep(3), 4500))

    return () => timeouts.forEach(clearTimeout)
  }, [disableAnimation])

  return (
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
        <Fade in={step >= 1} timeout={2000}>
          <span>, you are logged in.</span>
        </Fade>
        <br />
        <Fade in={step >= 2} timeout={2000}>
          <span>Do you want to </span>
        </Fade>
        <Fade in={step >= 3} timeout={2000}>
          <span>
            <Link
              component="button"
              onClick={onLogout}
              underline="always"
              sx={{ color: 'primary.main', cursor: 'pointer' }}
            >
              logout
            </Link>
            ?
          </span>
        </Fade>
      </Typography>
    </Box>
  )
}

export default WelcomeAnimation
