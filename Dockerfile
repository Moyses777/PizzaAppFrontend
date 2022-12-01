FROM node:19

WORKDIR /home/app
RUN npm install -g http-server
RUN npm install -g @vue/cli

COPY . /home/app
COPY package*.json .
COPY tsconfig.json .

RUN npm install

RUN npm run build

#EXPOSE 3000

CMD ["npm", "run", "serve"]