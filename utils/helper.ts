import axios from 'axios'
export const errorTypeHandler = (error: unknown) : string => {
    let message: string
    if (axios.isAxiosError(error)) {
        message = error.response?.data ?? error.message
      } else if (error instanceof Error) {
        message = error.message
      } else {
        message = String(error)
      }
    return message
};