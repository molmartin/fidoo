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
    <Typography variant="body1" fontSize={20}>
      Welcome <Link href={`mailto:${email}`}>{email}</Link>,{' '}
      <Fade in={step >= 1} timeout={2000}>
        <span>you are logged in.</span>
      </Fade>
      <br />
      <Fade in={step >= 2} timeout={2000}>
        <span>Do you want to </span>
      </Fade>
      <Fade in={step >= 3} timeout={3000}>
        <span>
          <Link
            component="button"
            onClick={onLogout}
            sx={{ color: 'primary.main', cursor: 'pointer' }}
          >
            logout
          </Link>
          ?
        </span>
      </Fade>
    </Typography>
  )
}

export default WelcomeAnimation
