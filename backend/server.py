#! /usr/bin/env python3

from concurrent.futures import ThreadPoolExecutor
from grpc import server as grpc_server
import logging
from pathlib import Path

from hello_world_pb2_grpc import (
  add_HelloWorldServicer_to_server,
)
from hello_world_servicer import (
  HelloWorldServicer,
)

Path('./logs/').mkdir(exist_ok = True)

logging.basicConfig(
  filename = './logs/server.log',
  level = logging.INFO,
  format = '%(levelname)s|%(asctime)s|%(message)s',
  datefmt = '%Y-%m-%dT%H:%M:%S%z',
)

# Backend Address
address = '127.0.0.1:9090'

server = grpc_server(ThreadPoolExecutor(max_workers = 16))
add_HelloWorldServicer_to_server(
  HelloWorldServicer(), server
)

server.add_insecure_port(address)
logging.info('Starting the server ...')
server.start()

logging.info(f'The server is listening to http://{address}')

try:
  server.wait_for_termination()
except:
  pass
logging.info('Terminating the server ...')
