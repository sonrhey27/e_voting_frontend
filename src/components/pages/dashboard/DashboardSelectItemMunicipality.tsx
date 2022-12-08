import { IMunicipality } from 'interfaces/IMunicipality';
import municipalityStore from 'store/MunicipalityStore';

const DashboardSelectItemMunicipality = () => {

  return (
    <>
      {
        municipalityStore.municipalityList.map((municipality: IMunicipality) => {
          return (
            <option key={municipality.id} value={municipality.id}>{municipality.name}</option>
          )
        })
      }
    </>
  )
}

export default DashboardSelectItemMunicipality