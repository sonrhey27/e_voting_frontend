import { IRegion } from "interfaces/IRegion"
import regionStore from "store/RegionStore"

const SignUpRegionSelectItem  = () => {
  return (
    <>
      {
        regionStore.regionList.map((region: IRegion) => {
          return (
            <option key={region.uuid} value={region.id}>{region.name}</option>
          )
        })
      }
    </>
  )
}

export default SignUpRegionSelectItem