import { IPosition } from "interfaces/IPosition"
import positionStore from "store/PositionStore"

const PositionSelectItem = () => {
  return (
    <>
      {
        positionStore.positionList.map((position: IPosition) => {
          return (
            <option key={position.uuid} value={position.id}>{position.name}</option>
          )
        })
      }
    </>
  )
}

export default PositionSelectItem