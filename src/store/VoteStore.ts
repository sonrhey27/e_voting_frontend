import axios from 'axios';
import { configure, makeAutoObservable } from 'mobx';
import { RegionsEndpoint } from 'api/RegionsEndpoint';
import { IRegion } from 'interfaces/IRegion';
import { IVote, IVoteFilter } from 'interfaces/IVote';
import { VoteEndpoint } from 'api/VoteEndpoint';

configure({
  enforceActions: 'never',
});

class VoteStore {
  status = 'pending'
  candidate = 0
  voteCount = []

  endpoint = VoteEndpoint()

  constructor() {
    makeAutoObservable(this)
  }

  PostVote = async (data: IVote) => {
    const request = await axios.post(this.endpoint.postVote, data)
    this.status = 'done'
    this.candidate = request.data.voting_count.candidate_id
  }

  VoteCount = async (country_id?: number, region_id?: number, municipality_id?: number) => {
    console.log(municipality_id)
    const request = await axios.get(this.endpoint.getVote, {
      params: {
        country_id: country_id,
        municipality_id: municipality_id,
        region_id: region_id,
      }
    })
    this.status = 'done'
    this.voteCount = request.data
    console.log(this.voteCount)
  }
}

const voteStore = new VoteStore()
export default voteStore