import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EventClient as _event_EventClient, EventDefinition as _event_EventDefinition } from './event/Event';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  event: {
    Event: SubtypeConstructor<typeof grpc.Client, _event_EventClient> & { service: _event_EventDefinition }
    EventID: MessageTypeDefinition
    Partecipants: MessageTypeDefinition
  }
}

