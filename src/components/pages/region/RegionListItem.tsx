import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import regionStore from "store/RegionStore";
import { IRegion } from 'interfaces/IRegion';
import { actions } from 'constants/index';

const RegionListItem = ({handleClick}) => {
  return (
    <>
      {
        regionStore.regionList.map((region: IRegion) => {
          return (
            <tr key={region.id}>
              <td>{region.uuid}</td>
              <td>{region.code}</td>
              <td>{region.name}</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary" onClick={e => handleClick(e, region, actions.EDIT)}>Edit</Button>
                  <Button variant="danger" onClick={e => handleClick(e, region, actions.DELETE)}>Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}

export default RegionListItem