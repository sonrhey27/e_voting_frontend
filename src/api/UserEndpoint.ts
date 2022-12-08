export const UserEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const getUser = `${endpoint}users`
  const postUser = `${endpoint}users`
  const patchUser = `${endpoint}users`
  const deleteUser = `${endpoint}users`
  const loginUser = `${endpoint}users/login`
  return {
    getUser,
    postUser,
    patchUser,
    deleteUser,
    loginUser
  }
}