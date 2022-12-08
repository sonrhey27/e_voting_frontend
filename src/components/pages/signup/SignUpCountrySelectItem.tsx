import { ICountry } from "interfaces/ICountry"
import countryStore from "store/CountryStore"

const SignUpContrySelectItem = () => {
  return (
    <>
      {
        countryStore.countryList.map((country: ICountry) => {
          return (
            <option key={country.uuid} value={country.id}>{country.name}</option>
          )
        })
      }
    </>
  )
}

export default SignUpContrySelectItem