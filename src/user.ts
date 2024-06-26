import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import path from "path"

// import {ProtoGrpcType} from "./proto/proto_file_name_no_extension";

import {ProtoGrpcType} from "../proto/user"

const PORT = 50020
const PROTO_PATH = '../proto/user.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH))
const grpcObj =
    (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

// setuppo il client per la connessione
const client_send_user = new grpcObj.user.UserSend(
    'localhost:' + PORT, grpc.credentials.createInsecure())

const deadline = new Date()

export function UserSend(pk: UserSendRequest) {
  deadline.setSeconds(deadline.getSeconds() + 5)

  // mi connetto al server
  return client_send_user.waitForReady(deadline, (err) => {
    if (err) {
      return console.error(err)
    }
    onClientEventReady(pk)
  })
}

function onClientEventReady(pk: UserSendRequest) {
  // send the message to user with UserId
  client_send_user.Send(pk, (err, res) => {
    if (err) {
      return console.error(err)
    }
    if (res === undefined) {
      return console.error("res is undefined")
    }
    if (res.ok === false) {
      return console.error(res.message)
    }
  })
}

/// the class through which you can send a message to a user
export class UserSendRequest {
  UserId: string = ''
  API: string = 'Match'
  What: string = ''
  Content: string = ''
  constructor() {}

  public to(id: string): this {
    this.UserId = id
    return this
  }

  public what(w: string): this {
    this.What = w
    return this
  }

  public content(...args: any): this {
    this.Content = JSON.stringify(args)
    return this
  }

  public send(): this {
    UserSend(this)
    return this
  }
};
