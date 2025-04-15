import { useMutation } from '@tanstack/react-query'
import checkUsernameWithErrorHandling, {
  type CheckUsernameResult,
} from '../../../api/checkUsername'

function useLogin() {
  return useMutation<CheckUsernameResult, unknown, string>({
    mutationFn: checkUsernameWithErrorHandling,
  })
}

export default useLogin
