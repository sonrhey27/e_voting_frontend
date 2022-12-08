export const MunicipalityEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const getMunicipalities = `${endpoint}municipalities`
  const postMunicipalities = `${endpoint}municipalities`
  const patchMunicipalities = `${endpoint}municipalities`
  const deleteMunicipalities = `${endpoint}municipalities`
  return {
    getMunicipalities,
    postMunicipalities,
    patchMunicipalities,
    deleteMunicipalities
  }
}