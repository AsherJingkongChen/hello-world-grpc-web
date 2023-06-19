#! /usr/bin/env sh

# **Prerequisites**
# 1. pip install grpcio-tools
# 2. npm install -g protoc-gen-js
# 3. Install protoc-gen-grpc-web from grpc-web releases
#   - https://github.com/grpc/grpc-web/releases

python3 -m grpc_tools.protoc \
  -I ./protos/ \
  --python_out ./backend/ \
  --pyi_out ./backend/ \
  --grpc_python_out ./backend/ \
  --js_out import_style=commonjs,binary:./frontend/src/grpc_gen/ \
  --grpc-web_out import_style=typescript,mode=grpcweb:./frontend/src/grpc_gen/ \
  ./protos/*.proto;
