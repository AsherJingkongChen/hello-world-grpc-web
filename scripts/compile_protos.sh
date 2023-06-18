#! /usr/bin/env sh

OUT_DIR="./src/backend/generated";
! [ -d $OUT_DIR ] && mkdir $OUT_DIR;

# Pre: pip install grpcio-tools
python3 -m grpc_tools.protoc \
  -I./src/protos \
  --python_out=$OUT_DIR \
  --pyi_out=$OUT_DIR \
  --grpc_python_out=$OUT_DIR \
  ./src/protos/*.proto;

OUT_DIR="./src/frontend/generated";
! [ -d $OUT_DIR ] && mkdir $OUT_DIR;

# Pre: Install Protocol Buffer Compiler
protoc \
  -I./src/protos \
  --js_out=import_style=commonjs:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR \
  ./src/protos/*.proto;