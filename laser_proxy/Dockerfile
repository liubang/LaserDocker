FROM ubuntu:20.04

USER root

RUN apt-get update \
        && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        net-tools \
        curl \
        && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /opt/laser_proxy/{bin,etc}

COPY laser_proxy /opt/laser_proxy/bin/laser_proxy
COPY laser_proxy.gflags /opt/laser_proxy/etc/laser_proxy.gflags

ENV LASER_PROXY_HOME=/opt/laser_proxy
ENV PATH /opt/laser_proxy/bin:$PATH

ADD run.sh /run.sh
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]
