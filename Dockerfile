FROM node:8.5.0
COPY . /src
WORKDIR /src
EXPOSE 3000
EXPOSE 5432
RUN npm install
CMD ["node", "app.js"]