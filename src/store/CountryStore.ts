import { ICountry } from 'interfaces/ICountry';
import axios from 'axios';
import { configure, makeAutoObservable } from 'mobx';
import { CountriesEndpoint } from 'api/CountriesEndpoint';

configure({
  enforceActions: "never",
});

class CountryStore {
  countryList: ICountry[] = []
  endpoint = CountriesEndpoint()

  constructor() {
    makeAutoObservable(this);
  }
  
  GetCountries = async () => {
    const request = await axios.get(`${this.endpoint.getCountries}`)
    this.countryList = request.data.countries
  }

  PostCountry = async (data: ICountry) => {
    const request = await axios.post(`${this.endpoint.postCountry}`, data)
  }

  PatchCountry = async (data: ICountry) => {
    await axios.patch(`${this.endpoint.patchCountry}/${data.uuid}`, data)
  }

  DeleteCountry = async (uuid: string) => {
    await axios.delete(`${this.endpoint.deleteCountry}/${uuid}`)
  }
}

const countryStore = new CountryStore()
export default countryStore;