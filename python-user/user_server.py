from concurrent import futures
from bson import ObjectId

import grpc
import logging
import user_pb2
import user_pb2_grpc
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["auth_service"]
col = db["users"]


class UserServicer(user_pb2_grpc.UserServiceServicer):
    def UpdateUser(self, request, context):
        query = {"_id" : ObjectId(request.id)}
        newValue = { "$set": {
            "username": request.username,
            "email": request.email,
            "fullname": request.fullname
        }}
        col.update_one(query, newValue)
        a = col.find_one(query)
        print(type(a["_id"]))
        return user_pb2.UpdateUserResponse(id=str(a["_id"]), username=a["username"], email=a["email"], fullname=a["fullname"])  
        

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    user_pb2_grpc.add_UserServiceServicer_to_server(UserServicer(), server)
    server.add_insecure_port('[::]:9052')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    logging.basicConfig()
    serve()