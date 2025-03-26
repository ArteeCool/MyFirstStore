FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

ENV MONGO_CONN_STRING=mongodb+srv://artemgawrilyuk:Gl4Ktu3UDu7Fxbyj@cluster0.zrmx9ho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

EXPOSE 5000

CMD [ "npm", "run", "dev" ]