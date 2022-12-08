export interface IVote {
  candidate_id: number;
  vote?: 1;
  country_id: number;
  region_id: number;
  municipality_id: number;
  user_id: number;
  position_id: number;
}

export interface IVoteFilter {
  country_id?: number;
  region_id?: number;
  municipality_id?: number;
}