import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import path from "path"

// import {ProtoGrpcType} from "./proto/proto_file_name_no_extension";

import {ProtoGrpcType} from "../proto/event"

import {sleep} from "./utils"

const PORT = 50010
const PROTO_PATH = '../proto/event.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH))
const grpcObj =
    (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

// setuppo il client per la connessione
const client_event = new grpcObj.event.Event('localhost:' + PORT,
                                             grpc.credentials.createInsecure())

// Function to get participants asynchronously using Promise
export function GetPartecipants(id: string):
    Promise<string[]> {
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 5);

      return new Promise<string[]>((resolve, _) => {
        client_event.waitForReady(deadline, (err) => {
          if (err) {
            console.error(err);
            // Assuming "sleep" is a synchronous function to pause execution for
            // 0.01 seconds
            sleep(0.01); // If the connection is not ready, wait for 0.01
                         // seconds and retry
            return GetPartecipants(id);
          }
          // Call the onClientEventReady function with the id
          const result = onClientEventReady(id);
          resolve(result);
        });
      });
    }

function onClientEventReady(id: string): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    client_event.GetPartecipants({id}, (err, res) => {
      if (err) {
        console.error(err);
        reject(err); // Reject the Promise with the error
        return;
      }

      if (!res || !res.partecipants) {
        console.error('res undefined or res.partecipants undefined');
        resolve([]); // Resolve the Promise with an empty array
        return;
      }

      resolve(
          res.partecipants); // Resolve the Promise with the participants array
    });
  });
}
