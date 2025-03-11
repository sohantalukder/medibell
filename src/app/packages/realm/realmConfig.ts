import {Realm} from '@realm/react';
import ChatsModel from '@models/Chats.model';

const realmConfig: Realm.Configuration = {
  schema: [ChatsModel],
  schemaVersion: 2,
  deleteRealmIfMigrationNeeded: true,
};

export default realmConfig;
