import { useState } from 'react'
import { Container, FormControlLabel, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import WelcomeAnimation from './components/WelcomeAnimation'
import useLoginSession from '../../hooks/useLoginSession'

function WelcomePage() {
  const email = localStorage.getItem('email')
  const [disableAnimation, setDisableAnimation] = useState(false)

  const { removeSession } = useLoginSession()
  const navigate = useNavigate()

  function handleLogout() {
    removeSession()
    navigate('/', { state: { fromProtected: true } })
  }

  return (
    <Container maxWidth="md">
      <WelcomeAnimation
        email={email}
        disableAnimation={disableAnimation}
        onLogout={handleLogout}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={disableAnimation}
            onChange={(e) => setDisableAnimation(e.target.checked)}
          />
        }
        label="Skip animation"
      />
    </Container>
  )
}

export default WelcomePage
