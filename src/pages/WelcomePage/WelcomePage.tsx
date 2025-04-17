import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import WelcomeAnimation from './components/WelcomeAnimation'
import useLoginSession from '../../hooks/useLoginSession'

function WelcomePage() {
  const email = localStorage.getItem('email')

  const { removeSession } = useLoginSession()
  const navigate = useNavigate()

  function handleLogout() {
    removeSession()
    navigate('/', { state: { fromProtected: true } })
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        py: 0,
      }}
    >
      <WelcomeAnimation email={email} onLogout={handleLogout} />
    </Container>
  )
}

export default WelcomePage
