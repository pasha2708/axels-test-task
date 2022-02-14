FROM node
WORKDIR /axels-test-task

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run build
CMD [ "npm", "start" ]