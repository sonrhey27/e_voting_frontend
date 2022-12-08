import { UserEndpoint } from "api/UserEndpoint"
import axios from "axios"
import { IUser } from "interfaces/IUser"

const UserStore = () => {
  const endpoint = UserEndpoint()

  const signUp = async (data: IUser) => {
    const request = await axios.post(endpoint.postUser, data)
    localStorage.setItem('login', JSON.stringify(request.data))
    location.replace('/')
  }

  const login = async (data: IUser) => {
    try {
      const request = await axios.post(endpoint.loginUser, data)
      localStorage.setItem('login', JSON.stringify(request.data))
      location.replace('/')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    signUp,
    login
  }
}

export default UserStore