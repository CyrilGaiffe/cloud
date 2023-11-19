FROM alpine:3.15 AS builder
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN apk update
RUN apk add nodejs npm
RUN npm install
COPY . /app
RUN npm run build
CMD ["npm", "run", "build"]


from alpine:3.15 as runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN apk add nodejs npm
RUN npm install --only=production
EXPOSE 8000
CMD ["npm", "run", "start"]
