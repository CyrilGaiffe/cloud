FROM alpine:3.15
WORKDIR /app
COPY . /app
RUN apk update
RUN apk add nodejs npm
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
