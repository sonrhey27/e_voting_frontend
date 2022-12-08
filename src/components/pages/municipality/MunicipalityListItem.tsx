import { IMunicipality } from "interfaces/IMunicipality"
import { Button, ButtonGroup } from "react-bootstrap"
import municipalityStore from "store/MunicipalityStore"
import { actions } from 'constants/index';

const MunicipalityListItem = ({handleClick}) => {
  return (
    <>
      {
        municipalityStore.municipalityList.map((municipality: IMunicipality) => {
          return (
            <tr key={municipality.uuid}>
              <td>{municipality.uuid}</td>
              <td>{municipality.code}</td>
              <td>{municipality.name}</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary" onClick={e => handleClick(e, municipality, actions.EDIT)}>Edit</Button>
                  <Button variant="danger" onClick={e => handleClick(e, municipality, actions.DELETE)}>Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}

export default MunicipalityListItem