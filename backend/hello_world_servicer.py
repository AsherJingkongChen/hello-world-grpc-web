"""The server of Hello World service"""

from hello_world_pb2 import (
  HelloWorldRequest,
  HelloWorldResponse,
)
from hello_world_pb2_grpc import (
  HelloWorldServicer,
)
from typing import Iterator
from time import sleep

class HelloWorldServicer(HelloWorldServicer):
  def say_hello_world(
    self,
    request: HelloWorldRequest,
    context,
  ) -> Iterator[HelloWorldResponse]:
    _INTERVAL = 301
    _COUNT = 25
    for i in range(1, 1 + _COUNT):
      response = HelloWorldResponse(
        text = f'{request.user_name} just said "Hello World"! x{i}\n'
      )
      yield response
      sleep(_INTERVAL)
