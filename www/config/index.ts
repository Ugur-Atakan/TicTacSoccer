import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Profile} from '../models/Profile';
import {Users} from '../models/Users';
// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Profile, Users],
  schemaVersion: 4,
};

// Create a realm context
export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);
