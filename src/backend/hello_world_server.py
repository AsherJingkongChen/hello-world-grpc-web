"""The server of Hello World service"""

from concurrent.futures import ThreadPoolExecutor
from grpc import server as grpc_server
import logging

from generated.hello_world_pb2 import (
  HelloWorldRequest,
  HelloWorldRespond,
)
from generated.hello_world_pb2_grpc import (
  HelloWorldServicer,
  add_HelloWorldServicer_to_server,
)

class HelloWorldServicer(HelloWorldServicer):
  def say_hello_world(
    self,
    request: HelloWorldRequest,
    context,
  ) -> HelloWorldRespond:
    respond = HelloWorldRespond(
      text = f'{request.user_name} just said "Hello World!"!'
    )
    return respond

def serve():
  server = grpc_server(ThreadPoolExecutor(max_workers = 16))
  add_HelloWorldServicer_to_server(
    HelloWorldServicer(), server
  )
  address = 'localhost:50051'
  server.add_insecure_port(address)
  logging.info('Starting server ...')
  server.start()
  logging.info(f'Server is listening to {address}')
  server.wait_for_termination()
  logging.info('Terminating server ...')

if __name__ == '__main__':
  logging.basicConfig(
    filename = 'server.log',
    level = logging.NOTSET,
    format = '%(levelname)s|%(asctime)s|%(message)s',
    datefmt = '%Y-%m-%dT%H:%M:%S%z'
  )
  serve()