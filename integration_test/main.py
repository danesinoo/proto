import proto.match_pb2 as match
import proto.match_pb2_grpc as match_grpc
import grpc
import random
import time


def start_event(id):
    with grpc.insecure_channel("localhost:50000") as channel:
        stub = match_grpc.MatchStub(channel)

        stub.MatchStart(match.EventID(ID=id))


def stop_event(id):
    with grpc.insecure_channel("localhost:50000") as channel:
        stub = match_grpc.MatchStub(channel)

        response = stub.MatchStop(match.EventID(ID=id))
        print(response)


id = str(random.randint(0, 1000))

start_event(id)

time.sleep(61)

stop_event(id)
