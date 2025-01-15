FROM node:22

WORKDIR /app

COPY package.json ./
RUN npm install

COPY insertData.js /app/insertData.js

RUN apt-get update && apt-get install -y cron

RUN echo "*/5 * * * * /usr/local/bin/node /app/insertData.js >> /var/log/cron.log 2>&1" > /etc/cron.d/stats-cron

RUN chmod 0644 /etc/cron.d/stats-cron

RUN crontab /etc/cron.d/stats-cron

RUN touch /var/log/cron.log

RUN /usr/local/bin/node /app/insertData.js

CMD ["cron", "-f"]
