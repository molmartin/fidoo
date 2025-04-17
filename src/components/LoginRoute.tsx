import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useLoginSession from '../hooks/useLoginSession'
import { JSX } from 'react'

function LoginRoute(): JSX.Element {
  const { getSession } = useLoginSession()
  const location = useLocation()

  if (getSession()) {
    return (
      <Navigate
        to="/dashboard"
        replace
        state={{ fromLogin: true, from: location.pathname }}
      />
    )
  }

  return <Outlet />
}

export default LoginRoute
