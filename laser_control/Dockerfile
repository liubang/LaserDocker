FROM ubuntu:20.04

RUN mkdir -p /laser/control

ADD laser_control /laser/control

ENV PATH /laser/control:$PATH

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /

RUN chmod a+x /wait-for-it.sh

CMD [ "/laser/control/laser_control", "server", "--config=/laser/control/etc/config.yaml" ]
