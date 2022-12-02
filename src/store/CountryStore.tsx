import { ICountry } from 'components/Interfaces/ICountry';
import axios from 'axios';
import { configure, makeAutoObservable } from 'mobx';

configure({
  enforceActions: "never",
});

class CountryStore {
  countryList: ICountry[] = []

  constructor() {
    makeAutoObservable(this);
  }
  
  GetCountries = async () => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT
    const request = await axios.get(`${endpoint}countries`)
    this.countryList = request.data.countries
  }

  PostCountries = async (data: ICountry) => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT
    const request = await axios.post(`${endpoint}countries`, data)
  }
}

const countryStore = new CountryStore()
export default countryStore;