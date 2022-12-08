export const PositionsEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const getPositions = `${endpoint}positions`
  const postPosition = `${endpoint}positions`
  const patchPosition = `${endpoint}positions`
  const deletePosition = `${endpoint}positions`
  return {
    getPositions,
    postPosition,
    patchPosition,
    deletePosition
  }
}