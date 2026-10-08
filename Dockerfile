FROM node:24-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY server.mjs ./
ENV PORT=3000
EXPOSE 3000
USER node
CMD ["node", "server.mjs"]
