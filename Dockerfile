FROM node:slim
WORKDIR /app
COPY . /app
RUN npm i
EXPOSE 3000
CMD npm run dev