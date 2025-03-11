import {Realm} from 'realm';

class CallsModel extends Realm.Object<CallsModel> {
  id: string = '';
  name: string = '';
  date: Date = new Date();
  image!: string;
  callType: string = 'missed';
  totalMissed: number = 0;
  duration: number = 0;
}

export default CallsModel;
