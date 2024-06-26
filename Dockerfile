# Use a Node.js base image with the desired version
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR app/

# Install dependencies
RUN yarn init -y
RUN yarn add @grpc/grpc-js @grpc/proto-loader ts-node typescript

# Copy all your source code to the container
COPY /src /app/src
COPY /proto /app/proto

# Specify the command to start your API (replace 'node dist/app.js' with your start command)
CMD ["yarn", "ts-node", "src/index.ts"]
