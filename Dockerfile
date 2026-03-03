FROM node:18-alpine

WORKDIR /app

COPY app/package*.json ./
RUN npm install --only=production

COPY app/ .

RUN wget -q -O /app/data/reward.png \
  "https://drive.google.com/uc?export=download&id=1vkV4smxcTVVcmwGTpH1KJMvi8-ojzZ_E"

EXPOSE 3000

CMD ["node", "server.js"]