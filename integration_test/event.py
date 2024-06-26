import proto.event_pb2 as event
import proto.event_pb2_grpc as event_grpc
import grpc
import random

from concurrent import futures

# service Event {
# 	rpc GetPartecipants(EventID) returns (Partecipants);
# }
#
# message EventID {
# 	string id = 1;
# }
#
# message Partecipants {
# 	repeated string partecipants = 1;
# }


class Event(event_grpc.EventServicer):
    def GetPartecipants(self, req, _):
        print(req.id)
        partecipants = []
        for _ in range(0, 2):
            partecipants.append(str(random.randint(0, 100)))

        print(partecipants)
        return event.Partecipants(partecipants=partecipants)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    event_grpc.add_EventServicer_to_server(Event(), server)
    server.add_insecure_port("[::]:50010")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
