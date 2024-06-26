import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MatchClient as _match_MatchClient, MatchDefinition as _match_MatchDefinition } from './match/Match';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  match: {
    AnswerRequest: MessageTypeDefinition
    EventID: MessageTypeDefinition
    Match: SubtypeConstructor<typeof grpc.Client, _match_MatchClient> & { service: _match_MatchDefinition }
    Response: MessageTypeDefinition
    UserID: MessageTypeDefinition
  }
}

