import { Suggestions } from '../actions/types';
import { Map, List, Set } from 'immutable';
import * as TimeUtils from '../utils/TimeUtils';

export default (
  state = Map({
    threads: List(),
    hints: List()
  }),
  action
) => {
  switch (action.type) {
    case Suggestions.SET_THREADS: {
      const threadsList = List(
        action.threads.map(thread => {
          return Map(thread).merge({
            date: TimeUtils.defineTimeByToday(thread.date),
            totalAttachments: 1,
            labels: Set(
              thread.labels ? thread.labels.split(',').map(Number) : []
            ),
            allLabels: Set(
              thread.allLabels ? thread.allLabels.split(',').map(Number) : []
            ),
            emailIds: List(thread.emailIds.split(',').map(Number))
          });
        })
      );
      const hintsList = List(action.hints);

      return state.merge({
        hints: hintsList,
        threads: threadsList,
        error: null
      });
    }
    case Suggestions.SET_ERROR_SUGGESTIONS: {
      return state.set('error', action.error);
    }
    default:
      return state;
  }
};
