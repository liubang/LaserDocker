#!/bin/bash

if [ -z "$LASER_CONSUL_ADDR" ]; then
  LASER_CONSUL_ADDR="consul:8500"
fi

if [ -z "$LASER_PROXY_SERVICE_NAME" ]; then
  LASER_PROXY_SERVICE_NAME="laser_test_proxy"
fi

if [ -z "$LASER_PROXY_TARGET_SERVICE_NAME" ]; then
  LASER_PROXY_TARGET_SERVICE_NAME="laser_test"
fi

if [ -z "$LASER_PROXY_HTTP_PORT" ]; then
  LASER_PROXY_HTTP_PORT=30010
fi

if [ -z "$LASER_PROXY_HOST" ]; then
  LASER_PROXY_HOST="localhost"
fi

if [ -z "$LASER_PROXY_PORT" ]; then
  LASER_PROXY_PORT=16382
fi

# init service
KV_NS="ads-core/services"
function create_service() {
  if [ $# -ne 1 ]; then
    return
  fi
  curl -XPUT "$LASER_CONSUL_ADDR/v1/kv/$KV_NS/$1/config/router" \
    -d '{"TotalShards":0,"TtlInMs":3000,"PullInterval":3,"LoadBalance":"random"}'
  curl -XPUT "$LASER_CONSUL_ADDR/v1/kv/$KV_NS/$1/config/version" -d '1'
  curl -XPUT "$LASER_CONSUL_ADDR/v1/kv/$KV_NS/$1/config/configs/"
  curl -XPUT "$LASER_CONSUL_ADDR/v1/kv/$KV_NS/$1/nodes/"
}

create_service $LASER_PROXY_SERVICE_NAME

$LASER_PROXY_HOME/bin/laser_proxy \
  --host=$LASER_PROXY_HOST \
  --router_consul_addresses=$LASER_CONSUL_ADDR \
  --target_service_name=$LASER_PROXY_TARGET_SERVICE_NAME \
  --service_name=$LASER_PROXY_SERVICE_NAME \
  --port=$LASER_PROXY_HTTP_PORT \
  --laser_proxy_port=$LASER_PROXY_PORT \
  --flagfile=$LASER_PROXY_HOME/etc/laser_proxy.gflags
