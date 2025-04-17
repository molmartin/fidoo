import { useEffect, useState } from 'react'
import { Typography, Link, Fade } from '@mui/material'

type Props = {
  email: string | null
  onLogout: () => void
}

function WelcomeAnimation({ email, onLogout }: Props) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    timeouts.push(setTimeout(() => setStep(1), 1000))
    timeouts.push(setTimeout(() => setStep(2), 2500))
    timeouts.push(setTimeout(() => setStep(3), 4500))

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <Typography variant="body1" fontSize={{ xs: 16, sm: 18, md: 20 }}>
      Welcome, <Link href={`mailto:${email}`}>{email}</Link>.{' '}
      <Fade in={step >= 1} timeout={2000}>
        <span>You are logged in.</span>
      </Fade>
      <br />
      <Fade in={step >= 2} timeout={2000}>
        <span>Do you want to </span>
      </Fade>
      <Fade in={step >= 3} timeout={3000}>
        <span>
          <Link
            component="button"
            underline="always"
            color="primary"
            onClick={onLogout}
          >
            log out
          </Link>
          ?
        </span>
      </Fade>
    </Typography>
  )
}

export default WelcomeAnimation
