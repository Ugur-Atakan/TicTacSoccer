import Realm from 'realm';

export class Users extends Realm.Object<Users> {
  _id!: Realm.BSON.UUID;
  username!: string;
  password!: string;
  email!: string;
  profilePictyre!: string;

  static schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      name: 'string',
      password: 'string',
      email: 'string',
      profilePicture: 'string',
    },
  };
}
