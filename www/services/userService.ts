import Realm from 'realm';
import {useRealm} from '../config';
import {Users} from '../models/Users';

export class userService {
  realm = useRealm();

  addProfile = (user: any) => {
    this.realm.write(() => {
      this.realm.create('Users', {
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

  findById = (uuid: string) => {
    const record = this.realm.objects('Users').filtered('_id = $0', uuid)[0];
    return record;
  };

  deleteRecord = (uuid: string) => {
    const recordToDelete = this.findById(uuid);
    if (recordToDelete) {
      this.realm.write(() => {
        this.realm.delete(recordToDelete);
      });
    } else {
      console.error('Kayıt bulunamadı:', uuid);
    }
  };
}
