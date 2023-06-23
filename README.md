# Hello World! - gRPC-Web

# Claim
This repository is a development-level template, built for learning gRPC-Web.

# Run
1. Proxy Server (Port 8080 -> 8081)
```
docker compose up envoy-proxy
```

2. Main Server (Port 8081)
```
./backend/server.py
```

3. Website (Port 3000)
```
cd frontend; npm run dev
```

# Life of a request
```
Website                 Proxy Server       Main Server
(Downstream)            (Proxy)            (Upstream)
:3000         ------->  :8080    ------->  :8081
              HTTP/1.1           HTTP/2
              gRPC-Web           gRPC-Web
```
