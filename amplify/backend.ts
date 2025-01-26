import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { myFirstFunction } from './stock_helper/resource';

defineBackend({
  auth,
  data,
  myFirstFunction
});
