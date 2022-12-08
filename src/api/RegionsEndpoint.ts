export const RegionsEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const getRegions = `${endpoint}regions`
  const postRegion = `${endpoint}regions`
  const patchRegion = `${endpoint}regions`
  const deleteRegion = `${endpoint}regions`
  return {
    getRegions,
    postRegion,
    patchRegion,
    deleteRegion
  }
}