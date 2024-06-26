// Original file: proto/event.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EventID as _event_EventID, EventID__Output as _event_EventID__Output } from '../event/EventID';
import type { Partecipants as _event_Partecipants, Partecipants__Output as _event_Partecipants__Output } from '../event/Partecipants';

export interface EventClient extends grpc.Client {
  GetPartecipants(argument: _event_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  GetPartecipants(argument: _event_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  GetPartecipants(argument: _event_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  GetPartecipants(argument: _event_EventID, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  getPartecipants(argument: _event_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  getPartecipants(argument: _event_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  getPartecipants(argument: _event_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  getPartecipants(argument: _event_EventID, callback: grpc.requestCallback<_event_Partecipants__Output>): grpc.ClientUnaryCall;
  
}

export interface EventHandlers extends grpc.UntypedServiceImplementation {
  GetPartecipants: grpc.handleUnaryCall<_event_EventID__Output, _event_Partecipants>;
  
}

export interface EventDefinition extends grpc.ServiceDefinition {
  GetPartecipants: MethodDefinition<_event_EventID, _event_Partecipants, _event_EventID__Output, _event_Partecipants__Output>
}
