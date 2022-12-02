import axios from "axios"
import { CountriesEndpoint } from './CountriesEndpoint';
import { ICountry } from './../components/Interfaces/ICountry';
import { useState } from 'react';

const {
  getCountries,
  postCountries
} = CountriesEndpoint();

export const Countries = () => {
  // const [status, setStatus] = useState<string>('pending')

  const GetCountries = async () => {
    const request = await axios.get(getCountries)
    const response = request.data;
    // setStatus('done');
    return response;
  }
  
  const PostCountries = async (data: ICountry) => {
    const request = await axios.post(postCountries, data)
    const response = request.data
    // setStatus('done');
    // console.log(response)
  }

  return {
    GetCountries,
    PostCountries
  }
}
