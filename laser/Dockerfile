FROM laserdb/hadoop

ENV HDFS_CONF_dfs_namenode_name_dir=file:///hadoop/dfs/name
ENV HDFS_CONF_dfs_datanode_data_dir=file:///hadoop/dfs/data
RUN mkdir -p /hadoop/dfs/name && mkdir -p /hadoop/dfs/data

ENV LASERDB_DIR=/opt/laserdb

RUN mkdir -p ${LASERDB_DIR}/{bin,etc} 

COPY laser /opt/laserdb/bin/

ADD laser.gflags ${LASERDB_DIR}/etc/laser.gflags

ENV LASER_CONF_laser_data_dir=${LASERDB_DIR}/data
RUN mkdir -p ${LASER_CONF_laser_data_dir}

VOLUME [ "/hadoop/dfs/name", "/hadoop/dfs/data", "/opt/laserdb/data" ]

ADD run.sh /run.sh
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]
