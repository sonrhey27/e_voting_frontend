export const CountriesEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const getCountries = `${endpoint}countries`
  const postCountry = `${endpoint}countries`
  const patchCountry = `${endpoint}countries`
  const deleteCountry = `${endpoint}countries`
  return {
    getCountries,
    postCountry,
    patchCountry,
    deleteCountry
  }
}