import countryStore from 'store/CountryStore';
import { ICountry } from 'interfaces/ICountry';

const CountrySelectItem = () => {
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

export default CountrySelectItem