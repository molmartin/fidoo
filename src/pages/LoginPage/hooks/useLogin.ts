import { useMutation } from '@tanstack/react-query'
import checkUsername, { CheckUsernameResult } from '../../../api/checkUsername'

function useLogin() {
  return useMutation<CheckUsernameResult, unknown, string>({
    mutationFn: checkUsername,
  })
}

export default useLogin
