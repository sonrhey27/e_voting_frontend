import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import countryStore from "store/CountryStore";
import { ICountry } from 'interfaces/ICountry';
import { actions } from 'constants/index';

const CountryListItem = ({handleClick}) => {
  return (
    <>
      {
        countryStore.countryList.map((country: ICountry) => {
          return (
            <tr key={country.id}>
              <td>{country.uuid}</td>
              <td>{country.code}</td>
              <td>{country.name}</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary" onClick={e => handleClick(e, country, actions.EDIT)}>Edit</Button>
                  <Button variant="danger" onClick={e => handleClick(e, country, actions.DELETE)}>Delete</Button>
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