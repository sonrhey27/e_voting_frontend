import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import countryStore from "store/CountryStore";
import { ICountry } from './Interfaces/ICountry';

const CountryListItem = () => {
  return (
    <>
      {
        countryStore.countryList.map((country: ICountry) => {
          console.log(countryStore.countryList);
          return (
            <tr key={country.uuid}>
              <td>{country.uuid}</td>
              <td>{country.code}</td>
              <td>{country.name}</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}

export default CountryListItem