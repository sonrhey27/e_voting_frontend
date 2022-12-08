import { ICountry } from 'interfaces/ICountry';
import countryStore from 'store/CountryStore';

const DashboardSelectItemCountry = () => {
   return (
    <>
      {
        countryStore.countryList.map((country: ICountry) => {
          return (
            <option key={country.id} value={country.id}>{country.name}</option> 
          )
        })
      }
    </>
   )
}

export default DashboardSelectItemCountry