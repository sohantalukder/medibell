import config from '../../../../config';
import {IUnformattedAPIResponse} from '@entity-models/api/apiResponse';
import {sleepHook} from '@helper/hooks/sleep.hook';
import dummyData from '@localData/dummyData';
import {dummyDataFormat} from '@localData/dummyDataFormat';
// import ChatsModel from '@models/Chats.model';
import {IChat} from '@modules/chats/interface';
// import RealmHandle from '@packages/realm/realmHandle';
import {GETTING_PAYLOAD} from '@services/types';

class ChatsServicesClass {
  // :GET Chats list
  async getList(payload?: GETTING_PAYLOAD) {
    const {page, perPage} = payload || {
      page: 1,
      perPage: 50,
    };
    // for call for development version
    if (config.development) {
      try {
        // for sleep 2 seconds
        // read data from local data
        const object: IUnformattedAPIResponse<IChat[]> = {
          ...dummyData.Chats['chats/list'],
        };
        // get data from realm
        // const data = Array.from(
        //   RealmHandle<IChat[]>(ChatsModel).getAll() || [],
        // );
        // if (data.length === 0) {
        await sleepHook(() => {}, 2000);
        //   // add data to realm
        //   RealmHandle<IChat>(ChatsModel).add(object.data);
        // }
        // format data and return
        return dummyDataFormat({
          ...object,
          data: object.data.splice(
            page === 1 ? 0 : page || 0 * (perPage || 50 + 1),
            perPage,
          ),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

const ChatsServices = new ChatsServicesClass();
export default ChatsServices;
