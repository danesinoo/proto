import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserSendClient as _user_UserSendClient, UserSendDefinition as _user_UserSendDefinition } from './user/UserSend';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    Response: MessageTypeDefinition
    SendRequest: MessageTypeDefinition
    UserSend: SubtypeConstructor<typeof grpc.Client, _user_UserSendClient> & { service: _user_UserSendDefinition }
  }
}

