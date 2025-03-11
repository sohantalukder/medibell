import config from '../../../../config';
import {IUnformattedAPIResponse} from '@entity-models/api/apiResponse';
import {sleepHook} from '@helper/hooks/sleep.hook';
import dummyData from '@localData/dummyData';
import {dummyDataFormat} from '@localData/dummyDataFormat';
import {ICallEntry} from '@modules/calls/interface';
import {GETTING_PAYLOAD} from '@services/types';

class CallsServicesClass {
  // :GET Calls list
  async getList(payload?: GETTING_PAYLOAD) {
    try {
      const {page, perPage} = payload || {
        page: 1,
        perPage: 50,
      };
      // for call for development version
      if (config.development) {
        // for sleep 2 seconds
        // read data from local data
        const object: IUnformattedAPIResponse<ICallEntry[]> = {
          ...dummyData.Calls['calls/list'],
        };
        // get data from realm
        // const data = Array.from(
        //   RealmHandle<ICallEntry[]>(CallsModel).getAll() || [],
        // );
        await sleepHook(() => {}, 2000);
        //   // add data to realm
        //   RealmHandle<ICallEntry>(CallsModel).add(object.data);
        // }
        // format data and return
        return dummyDataFormat({
          ...object,
          data: object.data.splice(
            page === 1 ? 0 : page || 0 * (perPage || 50 + 1),
            perPage,
          ),
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}

const CallsServices = new CallsServicesClass();
export default CallsServices;
