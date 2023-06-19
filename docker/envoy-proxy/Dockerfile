FROM envoyproxy/envoy:v1.26.2

COPY ./envoy-proxy.yaml /etc/envoy-proxy.yaml

ENTRYPOINT [ "/usr/local/bin/envoy" ]
CMD [ \
  "-c /etc/envoy-proxy.yaml", \
  "-l info", \
  "--log-path /tmp/envoy-proxy.log" \
]
