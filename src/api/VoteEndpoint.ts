export const VoteEndpoint = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT
  const postVote = `${endpoint}voting_counts`
  const getVote = `${endpoint}voting_counts/vote_count`
  return {
    postVote,
    getVote
  }
}