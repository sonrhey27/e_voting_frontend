import axios from 'axios';
import { configure, makeAutoObservable } from 'mobx';
import { RegionsEndpoint } from 'api/RegionsEndpoint';
import { IRegion } from 'interfaces/IRegion';

configure({
  enforceActions: 'never',
});

class RegionStore {
  regionList: IRegion[] = []
  endpoint = RegionsEndpoint()

  constructor() {
    makeAutoObservable(this)
  }

  GetRegions = async () => {
    const request = await axios.get(this.endpoint.getRegions)
    this.regionList = request.data.regions
  }

  PostRegion = async (data: IRegion) => {
    const request = await axios.post(this.endpoint.postRegion, data)
  }

  PatchRegion = async (data: IRegion) => {
    await axios.patch(`${this.endpoint.patchRegion}/${data.uuid}`, data)
  }

  DeleteRegion = async (uuid: string) => {
    await axios.delete(`${this.endpoint.deleteRegion}/${uuid}`)
  }
}

const regionStore = new RegionStore()
export default regionStore;