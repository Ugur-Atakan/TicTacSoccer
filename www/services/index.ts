import React, {useState} from 'react';
import Realm from 'realm';
import { useRealm } from '../config';
import { Profile } from '../models/Profile';


export default class RealmServices {
  realm = useRealm();

  addProfile = (name: string) => {
    this.realm.write(() => {
      this.realm.create('Profile', {
        name: name,
        _id: new Realm.BSON.UUID(),
      });
    });
  };

  changeProfileName = (profile: Profile, newName: string) => {
    this.realm.write(() => {
      profile.name = newName;
    });
  };

  deleteProfile = (profile: Profile) => {
    this.realm.write(() => {
      this.realm.delete(profile);
    });
  };

}