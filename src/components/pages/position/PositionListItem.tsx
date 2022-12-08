import { IPosition } from "interfaces/IPosition"
import { Button, ButtonGroup } from "react-bootstrap"
import positionStore from "store/PositionStore"
import { actions } from 'constants/index';

const PositionListItem = ({handleClick}) => {
  return (
    <>
      {
        positionStore.positionList.map((position: IPosition) => {
          return (
            <tr key={position.uuid}>
              <td>{position.uuid}</td>
              <td>{position.name}</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary" onClick={e => handleClick(e, position, actions.EDIT)}>Edit</Button>
                  <Button variant="danger" onClick={e => handleClick(e, position, actions.DELETE)}>Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}

export default PositionListItem