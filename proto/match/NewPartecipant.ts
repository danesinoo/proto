// Original file: proto/match.proto

import type { EventID as _match_EventID, EventID__Output as _match_EventID__Output } from '../match/EventID';
import type { UserID as _match_UserID, UserID__Output as _match_UserID__Output } from '../match/UserID';

export interface NewPartecipant {
  'event'?: (_match_EventID | null);
  'user'?: (_match_UserID | null);
}

export interface NewPartecipant__Output {
  'event'?: (_match_EventID__Output);
  'user'?: (_match_UserID__Output);
}
