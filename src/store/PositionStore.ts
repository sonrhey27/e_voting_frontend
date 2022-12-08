import axios from 'axios';
import { configure, makeAutoObservable } from 'mobx';
import { IPosition } from 'interfaces/IPosition';
import { PositionsEndpoint } from 'api/PositionsEndpoint';

configure({
  enforceActions: 'never',
});

class PositionStore {
  positionList: IPosition[] = []
  endpoint = PositionsEndpoint()

  constructor() {
    makeAutoObservable(this)
  }

  GetPositions = async () => {
    const request = await axios.get(this.endpoint.getPositions)
    this.positionList = request.data.positions
  }

  PostPosition = async (data: IPosition) => {
    const request = await axios.post(this.endpoint.postPosition, data)
  }
  
  PatchPosition = async (data: IPosition) => {
    await axios.patch(`${this.endpoint.patchPosition}/${data.uuid}`, data)
  }
  
  DeletePosition = async (uuid: string) => {
    await axios.delete(`${this.endpoint.deletePosition}/${uuid}`)
  }
}

const positionStore = new PositionStore()
export default positionStore;