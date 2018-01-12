import { combineReducers } from 'redux-immutable';
import threads from './thread';
import users from './user';
import activities from './activity';
import emails from './emails';
import labels from './labels';

export default combineReducers({
  threads,
  users,
  activities,
  emails,
  labels
});