#!/bin/bash

# init hdfs namenode
namedir=$(echo $HDFS_CONF_dfs_namenode_name_dir | perl -pe 's#file://##')
if [ ! -d $namedir ]; then
  echo "Namenode name directory not found: $namedir"
  exit 2
fi

if [ -z "$HDFS_CLUSTER_NAME" ]; then
  HDFS_CLUSTER_NAME="test_hdfs"
fi

echo "remove lost+found from $namedir"
rm -r $namedir/lost+found

if [ "$(ls -A $namedir)" == "" ]; then
  echo "Formatting namenode name directory: $namedir"
  $HADOOP_HOME/bin/hdfs --config $HADOOP_CONF_DIR namenode -format $HDFS_CLUSTER_NAME
fi

nohup $HADOOP_HOME/bin/hdfs --config $HADOOP_CONF_DIR namenode &

# init hdfs datanode
datadir=$(echo $HDFS_CONF_dfs_datanode_data_dir | perl -pe 's#file://##')
if [ ! -d $datadir ]; then
  echo "Datanode data directory not found: $datadir"
  exit 2
fi

nohup $HADOOP_HOME/bin/hdfs --config $HADOOP_CONF_DIR datanode &

if [ -z "$LASER_SERVICE_NAME" ]; then
  LASER_SERVICE_NAME="laser_test"
fi

if [ -z "$LASER_REPLICATOR_SERVICE_NAME" ]; then
  LASER_REPLICATOR_SERVICE_NAME="${LASER_SERVICE_NAME}_replicator"
fi

if [ -z "$LASER_PORT" ]; then
  LASER_PORT=10010
fi

if [ -z "$LASER_HTTP_PORT" ]; then
  LASER_HTTP_PORT=20010
fi

if [ -z "$LASER_REPLICATOR_PORT" ]; then
  LASER_REPLICATOR_PORT=30010
fi

LASER_DATA_DIR=$LASER_CONF_laser_data_dir

if [ -z "$LASER_CONSUL_ADDR" ]; then
  LASER_CONSUL_ADDR="consul:8500"
fi

if [ -z "$LASER_HOST" ]; then
  LASER_HOST="127.0.0.1"
fi

if [ -z "$LASER_GROUP_NAME" ]; then
  LASER_GROUP_NAME="default"
fi

if [ -z "$LASER_NODE_ID" ]; then
  LASER_NODE_ID=1
fi

if [ -z "$LASER_HDFS_DIR" ]; then
  LASER_HDFS_DIR="/dw_ext/ad/ads_core/laser/test"
fi

# create hdfs directory
$HADOOP_HOME/bin/hadoop fs -test -e $LASER_HDFS_DIR || $HADOOP_HOME/bin/hadoop fs -mkdir -p $LASER_HDFS_DIR

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

create_service $LASER_SERVICE_NAME
create_service $LASER_REPLICATOR_SERVICE_NAME

# config laser server
$LASERDB_DIR/bin/laser \
  --group-name=$LASER_GROUP_NAME \
  --node-id=$LASER_NODE_ID \
  --host=$LASER_HOST \
  --service-name=$LASER_SERVICE_NAME \
  --replicator_service_name=$LASER_REPLICATOR_SERVICE_NAME \
  --router_consul_addresses=$LASER_CONSUL_ADDR \
  --port=$LASER_PORT \
  --replicator_port=$LASER_REPLICATOR_PORT \
  --http-port=$LASER_HTTP_PORT \
  --data_dir=$LASER_DATA_DIR \
  --hadoop_path="$HADOOP_HOME/bin/hadoop" \
  --laser_hdfs_data_dir=$LASER_HDFS_DIR \
  --flagfile=$LASERDB_DIR/etc/laser.gflags
