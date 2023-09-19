import React from 'react';
import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Profile} from '../models/Profile';

// Create a configuration object
const realmConfig: Realm.Configuration = {
    schema: [Profile],
    schemaVersion: 2,
};

  // Create a realm context
  export const {RealmProvider, useRealm, useObject, useQuery} = createRealmContext(realmConfig);
  