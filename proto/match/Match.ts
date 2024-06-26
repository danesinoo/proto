// Original file: proto/match.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AnswerRequest as _match_AnswerRequest, AnswerRequest__Output as _match_AnswerRequest__Output } from '../match/AnswerRequest';
import type { EventID as _match_EventID, EventID__Output as _match_EventID__Output } from '../match/EventID';
import type { Response as _match_Response, Response__Output as _match_Response__Output } from '../match/Response';

export interface MatchClient extends grpc.Client {
  MatchAnswer(argument: _match_AnswerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchAnswer(argument: _match_AnswerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchAnswer(argument: _match_AnswerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchAnswer(argument: _match_AnswerRequest, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchAnswer(argument: _match_AnswerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchAnswer(argument: _match_AnswerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchAnswer(argument: _match_AnswerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchAnswer(argument: _match_AnswerRequest, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  
  MatchStart(argument: _match_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchStart(argument: _match_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchStart(argument: _match_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchStart(argument: _match_EventID, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStart(argument: _match_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStart(argument: _match_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStart(argument: _match_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStart(argument: _match_EventID, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  
  MatchStop(argument: _match_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchStop(argument: _match_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchStop(argument: _match_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  MatchStop(argument: _match_EventID, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStop(argument: _match_EventID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStop(argument: _match_EventID, metadata: grpc.Metadata, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStop(argument: _match_EventID, options: grpc.CallOptions, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  matchStop(argument: _match_EventID, callback: grpc.requestCallback<_match_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface MatchHandlers extends grpc.UntypedServiceImplementation {
  MatchAnswer: grpc.handleUnaryCall<_match_AnswerRequest__Output, _match_Response>;
  
  MatchStart: grpc.handleUnaryCall<_match_EventID__Output, _match_Response>;
  
  MatchStop: grpc.handleUnaryCall<_match_EventID__Output, _match_Response>;
  
}

export interface MatchDefinition extends grpc.ServiceDefinition {
  MatchAnswer: MethodDefinition<_match_AnswerRequest, _match_Response, _match_AnswerRequest__Output, _match_Response__Output>
  MatchStart: MethodDefinition<_match_EventID, _match_Response, _match_EventID__Output, _match_Response__Output>
  MatchStop: MethodDefinition<_match_EventID, _match_Response, _match_EventID__Output, _match_Response__Output>
}
