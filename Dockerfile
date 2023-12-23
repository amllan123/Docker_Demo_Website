# Stage 1: Build Vite React App
FROM node:14 AS build

WORKDIR /app/client

COPY client/package.json ./
COPY client/package-lock.json ./

RUN npm install

COPY client/ .

RUN npm run build

# Stage 2: Build Node.js Server
FROM node:14

WORKDIR /app/server

COPY server/package.json ./
COPY server/package-lock.json ./

RUN npm install

COPY server/ .

# Stage 3: Combine Vite React App and Node.js Server
FROM node:14

WORKDIR /app

COPY --from=build /app/client/build /app/client/build
COPY --from=0 /app/server /app/server

EXPOSE 3001

CMD ["node", "/app/server/index.js"]
