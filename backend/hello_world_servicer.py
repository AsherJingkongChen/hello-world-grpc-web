"""The server of Hello World service"""

from hello_world_pb2 import (
  HelloWorldRequest,
  HelloWorldResponse,
)
from hello_world_pb2_grpc import (
  HelloWorldServicer,
)
from typing import Iterator

class HelloWorldServicer(HelloWorldServicer):
  def say_hello_world(
    self,
    request: HelloWorldRequest,
    context,
  ) -> Iterator[HelloWorldResponse]:
    response = HelloWorldResponse(
      text = f'{request.user_name} just said "Hello World"!'
    )
    return response
