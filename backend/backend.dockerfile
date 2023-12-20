FROM node:20
RUN apt-get update && apt-get install -y sh
ENTRYPOINT [“/bin/sh”]
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
EXPOSE 4000
CMD [ "node", "index.js" ]