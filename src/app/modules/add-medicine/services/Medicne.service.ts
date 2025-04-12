import {IUnformattedAPIResponse} from '@entity-models/api/apiResponse';
import {sleepHook} from '@helper/hooks/sleep.hook';
import dummyData from '@localData/dummyData';
import {dummyDataFormat} from '@localData/dummyDataFormat';
import {GETTING_PAYLOAD} from '@services/types';
import {IMedicine} from '@modules/add-medicine/interface/interface';
import config from '../../../../config';

class MedicineServicesClass {
  async getList(payload?: GETTING_PAYLOAD) {
    try {
      const {
        page = 1,
        perPage = 50,
        search = '',
      } = payload || {
        page: 1,
        perPage: 50,
        search: '',
      };

      // For development version
      if (config.development) {
        // Read data from local data
        const object: IUnformattedAPIResponse<IMedicine[]> = {
          ...dummyData.Medicine['medicine/list'],
        };

        await sleepHook(() => {}, 2000);

        // Convert search term to lowercase once
        const searchLower = search.toLowerCase();
        if (searchLower.length === 0) {
          return dummyDataFormat({
            ...object,
            data: {
              ...object.data,
              data: [],
            },
          });
        }
        // Filter data
        const filteredData = object.data.filter(
          item =>
            item.brandName.toLowerCase().includes(searchLower) ||
            item.generic.toLowerCase().includes(searchLower) ||
            item.strength.toLowerCase().includes(searchLower),
        );

        // Calculate pagination correctly
        const startIndex = (page - 1) * perPage;
        const paginatedData = filteredData.slice(
          startIndex,
          startIndex + perPage,
        );
        // Format data and return
        return dummyDataFormat({
          ...object,
          data: paginatedData,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

const MedicineServices = new MedicineServicesClass();
export default MedicineServices;
