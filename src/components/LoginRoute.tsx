import { Navigate, Outlet } from 'react-router-dom'
import useLoginSession from '../hooks/useLoginSession'
import { JSX } from 'react'

function LoginRoute(): JSX.Element {
  const { getSession } = useLoginSession()

  if (getSession()) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
export default LoginRoute
