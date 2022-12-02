export const CountriesEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const getCountries = `${endpoint}countries`
  const postCountries = `${endpoint}countries`
  return {
    getCountries,
    postCountries
  }
}