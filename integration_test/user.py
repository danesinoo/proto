import proto.user_pb2 as user
import proto.user_pb2_grpc as user_grpc
import proto.match_pb2 as match
import proto.match_pb2_grpc as match_grpc
import threading
import json
import grpc
import random

from concurrent import futures


def answer(req):
    user = req.UserId

    data = json.loads(req.Content)[0]

    print("question:", data["question"])

    ans = random.randint(0, len(data["answers"]) - 1)
    print(data["answers"][ans])
    eval = random.randint(0, 2)

    with grpc.insecure_channel("localhost:50000") as channel:
        stub = match_grpc.MatchStub(channel)

        response = stub.MatchAnswer(
            match.AnswerRequest(user=user, event=data["event"], answer=ans, eval=eval)
        )
    print("Client received:", response)


class User(user_grpc.UserSendServicer):
    def Send(self, req, _):
        print(req.UserId, req.API, req.What)

        if req.What == "question":
            # retrieve the answers from the content and choose a random answer
            thr = threading.Thread(answer(req))
            thr.daemon = True
            thr.start()

        else:
            print(req.Content)

        return user.Response(ok=True, message="")


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    user_grpc.add_UserSendServicer_to_server(User(), server)
    server.add_insecure_port("[::]:50020")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
