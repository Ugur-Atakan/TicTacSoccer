import Realm from 'realm';
import {useRealm} from '../config';
import {Users} from '../models/Users';

export class userService {
  realm = useRealm();

  addProfile = (user) => {
    this.realm.write(() => {
      this.realm.create('User', {
        _id: new Realm.BSON.UUID(),
        username: user.username,
        password: user.password,
        email: user.email,
        profilePicture: user.profilePicture,
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
