import { describe, it, expect } from 'vitest'
import checkUsernameWithErrorHandling from '../../api/checkUsername'

describe('checkUsernameWithErrorHandling', () => {
  it('should return email for valid username', async () => {
    const res = await checkUsernameWithErrorHandling('john_doe')
    expect(res).toEqual({
      error: null,
      data: 'john_doe@fidoo.com',
    })
  })

  it('should return email for special char username', async () => {
    const res = await checkUsernameWithErrorHandling('.........')
    expect(res).toEqual({
      error: null,
      data: '.........@fidoo.com',
    })
  })
  it('should throw an error for empty username', async () => {
    await expect(checkUsernameWithErrorHandling(' ')).rejects.toThrow(
      'username can only consist of characters a-z, A-Z, "-", "_" and "."',
    )
  })

  it('should throw on invalid characters', async () => {
    await expect(checkUsernameWithErrorHandling('john$doe')).rejects.toThrow(
      'username can only consist of characters a-z, A-Z, "-", "_" and "."',
    )
  })

  it('should throw if username is taken', async () => {
    await expect(checkUsernameWithErrorHandling('admin')).rejects.toThrow(
      'this username is already taken',
    )
  })
})
