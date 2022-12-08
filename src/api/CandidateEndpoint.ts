export const CandidateEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const getCandidate = `${endpoint}candidates`
  const postCandidate = `${endpoint}candidates`
  const patchCandidate = `${endpoint}candidates`
  const deleteCandidate = `${endpoint}candidates`
  return {
    getCandidate,
    postCandidate,
    patchCandidate,
    deleteCandidate
  }
}