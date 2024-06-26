// Original file: proto/match.proto

import type { EventID as _match_EventID, EventID__Output as _match_EventID__Output } from '../match/EventID';
import type { UserID as _match_UserID, UserID__Output as _match_UserID__Output } from '../match/UserID';

export interface NewPartecipants {
  'event'?: (_match_EventID | null);
  'users'?: (_match_UserID)[];
}

export interface NewPartecipants__Output {
  'event'?: (_match_EventID__Output);
  'users'?: (_match_UserID__Output)[];
}
