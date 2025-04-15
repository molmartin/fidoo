import { JSX } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useLoginSession from '../hooks/useLoginSession'

function ProtectedRoute(): JSX.Element {
  const location = useLocation()
  const { getSession } = useLoginSession()

  if (!getSession()) {
    return (
      <Navigate
        to="/"
        replace
        state={{ fromProtected: true, from: location.pathname }}
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute
