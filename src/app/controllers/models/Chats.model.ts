import {Realm} from 'realm';

class ChatsModel extends Realm.Object<ChatsModel> {
  id: string = '';
  name: string = '';
  message!: string;
  date: string = new Date().toString();
  image!: string;
  seen: boolean = false;
  total_message_unseen: number = 0;
}

export default ChatsModel;
