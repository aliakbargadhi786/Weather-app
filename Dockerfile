FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

COPY . .
RUN npm run build

EXPOSE 8081

CMD ["npm","start"]
