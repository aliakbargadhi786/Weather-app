FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]
