import axios from 'axios';
import { configure, makeAutoObservable } from 'mobx';
import { MunicipalityEndpoint } from 'api/MunicipalityEndpoint';
import { IMunicipality } from 'interfaces/IMunicipality';

configure({
  enforceActions: 'never',
});

class MunicipalityStore {
  municipalityList: IMunicipality[] = []
  endpoint = MunicipalityEndpoint()

  constructor() {
    makeAutoObservable(this)
  }

  GetMunicipalities = async () => {
    const request = await axios.get(this.endpoint.getMunicipalities)
    this.municipalityList = request.data.municipalities
  }

  PostMunicipality = async (data: IMunicipality) => {
    const request = await axios.post(this.endpoint.postMunicipalities, data)
  }

  PatchMunicipality = async (data: IMunicipality) => {
    await axios.patch(`${this.endpoint.patchMunicipalities}/${data.uuid}`, data)
  }

  DeleteMunicipality = async (uuid: string) => {
    await axios.delete(`${this.endpoint.deleteMunicipalities}/${uuid}`)
  }
}

const municipalityStore = new MunicipalityStore()
export default municipalityStore;