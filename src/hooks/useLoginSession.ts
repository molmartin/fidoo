function useLoginSession() {
  const sessionKey = 'email'

  function getSession() {
    return localStorage.getItem(sessionKey)
  }

  function setSession(email: string) {
    localStorage.setItem(sessionKey, email)
  }

  function removeSession() {
    localStorage.removeItem(sessionKey)
  }

  return {
    getSession,
    setSession,
    removeSession,
  }
}

export default useLoginSession
