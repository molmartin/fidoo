type CheckUsernameResult =
  | { error: null; data: string }
  | { error: string; data: string }

// TODO test
async function checkUsername(username: string): Promise<CheckUsernameResult> {
  // simulace prodlevy API odpovědi
  await new Promise((res) => setTimeout(res, 100))

  if (!/^[a-z-_.]+$/i.test(username)) {
    return {
      error: 'InvalidFormat',
      data: 'username can only consist of characters a-z, A-Z, "-", "_" and "."',
    }
  }

  if (['admin', 'null', 'root'].includes(username)) {
    return {
      error: 'AlreadyExists',
      data: 'this username is already taken',
    }
  }

  return {
    error: null,
    data: `${username.toLowerCase()}@fidoo.com`,
  }
}
export default checkUsername
export type { CheckUsernameResult }
