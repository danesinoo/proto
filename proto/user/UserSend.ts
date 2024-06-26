// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Response as _user_Response, Response__Output as _user_Response__Output } from '../user/Response';
import type { SendRequest as _user_SendRequest, SendRequest__Output as _user_SendRequest__Output } from '../user/SendRequest';

export interface UserSendClient extends grpc.Client {
  Send(argument: _user_SendRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  Send(argument: _user_SendRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  Send(argument: _user_SendRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  Send(argument: _user_SendRequest, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  send(argument: _user_SendRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  send(argument: _user_SendRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  send(argument: _user_SendRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  send(argument: _user_SendRequest, callback: grpc.requestCallback<_user_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface UserSendHandlers extends grpc.UntypedServiceImplementation {
  Send: grpc.handleUnaryCall<_user_SendRequest__Output, _user_Response>;
  
}

export interface UserSendDefinition extends grpc.ServiceDefinition {
  Send: MethodDefinition<_user_SendRequest, _user_Response, _user_SendRequest__Output, _user_Response__Output>
}
