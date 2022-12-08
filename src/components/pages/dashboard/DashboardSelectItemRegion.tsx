import { IRegion } from 'interfaces/IRegion';
import regionStore from 'store/RegionStore';

const DashboardSelectItemRegion = () => {
  return (
    <>
      {
        regionStore.regionList.map((region: IRegion) => {
          return (
            <option key={region.id} value={region.id}>{region.name}</option>
          )
        })
      }
    </>
  )
}

export default DashboardSelectItemRegion