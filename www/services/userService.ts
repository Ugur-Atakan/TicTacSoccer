import Realm from 'realm';
import {useRealm} from '../config';
import {Users} from '../models/Users';

export class userService {
  realm = useRealm();

  addProfile = (name: string) => {
    this.realm.write(() => {
      this.realm.create('Profile', {
        username: name,
        _id: new Realm.BSON.UUID(),
      });
    });
  };

  changeProfileName = (profile: Users, newName: string) => {
    this.realm.write(() => {
      profile.username = newName;
    });
  };

  deleteProfile = (profile: Users) => {
    this.realm.write(() => {
      this.realm.delete(profile);
    });
  };
}
