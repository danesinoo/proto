import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

// import {AdderHandlers} from "./proto/package_name/service_name";
// import {ProtoGrpcType} from "./proto/proto_file_name_no_extension";

import {ProtoGrpcType} from "../proto/match";
import {MatchHandlers} from "../proto/match/Match";

import {Answer, Start, Stop} from './logic_function'

const PORT = 50000;
const PROTO_PATH = '../proto/match.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH));
const grpcObj =
    (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;

// const service = grpcObj.package_name;
const match = grpcObj.match;

export function Server() {
  const server = getServer();
  server.bindAsync('localhost:' + PORT, grpc.ServerCredentials.createInsecure(),
                   (err, port) => {
                     if (err) {
                       return console.error(err);
                     }
                     console.log('gRPC listening on ' + port)
                     server.start()
                   });
}

function getServer() {
  const server = new grpc.Server();

  // setup the handlers
  server.addService(match.Match.service, {
    MatchStart : (call, callback) => {
      if (call.request.ID == null) {
        return callback(null, response(false, 'call.request.ID is null'))
      }
      callback(null, response())
      Start(call.request.ID)
    },

    MatchStop : (call, callback) => {
      if (call.request.ID == null) {
        return callback(null, response(false, 'call.request.ID is null'))
      }
      Stop(call.request.ID)
      callback(null, response())
    },

    MatchAnswer : (call, callback) => {
      if (call.request.event == null) {
        return callback(null, response(false, 'call.event is null'))
      }
      if (call.request.user == null) {
        return callback(null, response(false, 'call.user is null'))
      }
      if (call.request.answer == null) {
        return callback(null, response(false, 'call.answer is null'))
      }
      if (call.request.eval == null) {
        return callback(null, response(false, 'call.eval is null'))
      }

      const args = {
        event : call.request.event,
        user : call.request.user,
        answer : call.request.answer,
        eval : call.request.eval
      }

      const res = Answer(args)
      callback(null, res)
    },
  } as MatchHandlers)

  return server
}

export function response(ok = true, error_message = '') {
  return { ok, error_message }
}
