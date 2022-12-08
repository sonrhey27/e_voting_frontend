import axios from 'axios';
import { configure, makeAutoObservable } from 'mobx';
import { ICandidate } from 'interfaces/ICandidate';
import { CandidateEndpoint } from 'api/CandidateEndpoint';

configure({
  enforceActions: 'never',
});

class CandidateStore {
  candidateList: ICandidate[] = []
  endpoint = CandidateEndpoint()

  constructor() {
    makeAutoObservable(this)
  }

  GetCandidates = async () => {
    const request = await axios.get(this.endpoint.getCandidate)
    this.candidateList = request.data.candidates
  }

  PostCandidate = async (data: ICandidate) => {
    await axios.post(this.endpoint.postCandidate, data)
  }

  PatchCandidate = async (data: ICandidate) => {
    await axios.patch(`${this.endpoint.postCandidate}/${data.uuid}`, data)
  }

  DeleteCandidate = async (uuid: string) => {
    await axios.delete(`${this.endpoint.deleteCandidate}/${uuid}`)
  }
}

const candidateStore = new CandidateStore()
export default candidateStore;