"""The server of Hello World service"""

from hello_world_pb2 import (
  HelloWorldRequest,
  HelloWorldRespond,
)
from hello_world_pb2_grpc import (
  HelloWorldServicer,
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
