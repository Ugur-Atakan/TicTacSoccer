import Realm from 'realm';

export class Users extends Realm.Object<Users> {
  _id!: Realm.BSON.UUID;
  username!: string;
  password!: string;
  email!: string;
  profilePicture!: string;

  static schema = {
    name: 'Users',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      username: 'string',
      password: 'string',
      email: 'string',
      profilePicture: 'string',
    },
  };
}
