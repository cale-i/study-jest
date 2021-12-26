FROM node:lts

RUN apt update && apt install -y \
    && apt clean \
    && rm -rf /var/lib/apt/lists/*

RUN npm i jest
