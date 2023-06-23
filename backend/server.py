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

log_dir = Path(__file__).parent.joinpath('logs/')
log_dir.mkdir(exist_ok = True)

logging.basicConfig(
  handlers = [
    logging.FileHandler(log_dir.joinpath('server.log')),
    logging.StreamHandler(),
  ],
  level = logging.INFO,
  format = '%(levelname)s|%(asctime)s|%(message)s',
  datefmt = '%Y-%m-%dT%H:%M:%S%z',
)

# Main Server Address
address = '127.0.0.1:8081'

server = grpc_server(ThreadPoolExecutor(max_workers = 16))
add_HelloWorldServicer_to_server(
  HelloWorldServicer(), server
)

server.add_insecure_port(address)
logging.info('Starting the server ...')
server.start()

try:
  logging.info(f'The server is listening to http://{address}')
  server.wait_for_termination()
except KeyboardInterrupt:
  pass

logging.info('Terminating the server ...')
